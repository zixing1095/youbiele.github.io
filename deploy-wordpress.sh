#!/bin/bash
# 🔹 WordPress 一键部署脚本
# 适用于阿里云 CentOS/Ubuntu 服务器

set -e

echo "🔹 开始部署 WordPress..."

# 检查是否以 root 运行
if [ "$EUID" -ne 0 ]; then 
  echo "请使用 root 用户运行此脚本"
  exit 1
fi

# 检测系统类型
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    echo "无法检测系统类型"
    exit 1
fi

echo "📦 检测到系统：$OS"

# 安装依赖
case $OS in
    centos|rhel|almalinux|rocky)
        echo "📦 安装 CentOS 依赖..."
        yum update -y
        yum install -y httpd mariadb-server mariadb php php-mysqlnd php-fpm php-json php-common php-gd php-xml php-mbstring php-curl wget unzip
        systemctl enable httpd
        systemctl enable mariadb
        ;;
    ubuntu|debian)
        echo "📦 安装 Ubuntu/Debian 依赖..."
        apt update -y
        apt install -y apache2 mariadb-server mariadb-client php libapache2-mod-php php-mysql php-gd php-xml php-mbstring php-curl php-zip wget unzip curl
        systemctl enable apache2
        systemctl enable mariadb
        ;;
    *)
        echo "⚠️  不支持的系统：$OS"
        exit 1
        ;;
esac

# 启动服务
echo "🚀 启动服务..."
systemctl start mariadb
systemctl start apache2 2>/dev/null || systemctl start httpd

# 配置数据库
echo "🗄️  配置数据库..."
DB_NAME="wordpress"
DB_USER="wpuser"
DB_PASS=$(openssl rand -base64 16)
DB_ROOT_PASS=$(openssl rand -base64 16)

mysql_secure_installation <<EOF

y
$DB_ROOT_PASS
$DB_ROOT_PASS
y
y
y
y
EOF

mysql -u root -p"$DB_ROOT_PASS" -e "CREATE DATABASE $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
mysql -u root -p"$DB_ROOT_PASS" -e "CREATE USER '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASS';"
mysql -u root -p"$DB_ROOT_PASS" -e "GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'localhost';"
mysql -u root -p"$DB_ROOT_PASS" -e "FLUSH PRIVILEGES;"

echo "✅ 数据库配置完成"
echo "数据库名：$DB_NAME"
echo "数据库用户：$DB_USER"
echo "数据库密码：$DB_PASS"
echo "ROOT 密码：$DB_ROOT_PASS"

# 下载 WordPress
echo "📥 下载 WordPress..."
cd /tmp
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress/* /var/www/html/
chown -R apache:apache /var/www/html/ 2>/dev/null || chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/

# 创建 wp-config.php
echo "⚙️  配置 WordPress..."
cat > /var/www/html/wp-config.php <<WPCONFIG
<?php
define( 'DB_NAME', '$DB_NAME' );
define( 'DB_USER', '$DB_USER' );
define( 'DB_PASSWORD', '$DB_PASS' );
define( 'DB_HOST', 'localhost' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

\$table_prefix = 'wp_';

define( 'WP_DEBUG', false );

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
WPCONFIG

# 配置 Apache
echo "🔧 配置 Apache..."
cat > /etc/apache2/sites-available/000-default.conf <<APACHECONF
<VirtualHost *:80>
    ServerAdmin admin@example.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
APACHECONF

a2enmod rewrite 2>/dev/null || true
systemctl restart apache2 2>/dev/null || systemctl restart httpd

echo ""
echo "=========================================="
echo "✅ WordPress 部署完成！"
echo "=========================================="
echo "📍 访问地址：http://你的服务器 IP"
echo "🔐 请保存以下数据库信息："
echo "   数据库名：$DB_NAME"
echo "   数据库用户：$DB_USER"
echo "   数据库密码：$DB_PASS"
echo "   MySQL ROOT 密码：$DB_ROOT_PASS"
echo "=========================================="

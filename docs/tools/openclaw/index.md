# OpenClaw 教程

> 打工人效率提升神器

## 🤖 什么是 OpenClaw

OpenClaw 是一个开源的自动化助手，可以帮助你：

- 📱 自动发布社交媒体内容
- 📊 定时发送消息
- 🔗 集成各种 API
- 📝 自动化文档处理

## 🚀 快速开始

### 1. 安装

```bash
# 克隆仓库
git clone https://github.com/openclaw/openclaw.git

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
```

### 2. 配置

编辑 `.env` 文件：
```bash
# 飞书配置
FEISHU_APP_ID=your_app_id
FEISHU_APP_SECRET=your_app_secret

# 抖音配置
DOUYIN_COOKIE=your_cookie

# 小红书配置
XIAOHONGSHU_COOKIE=your_cookie
```

### 3. 运行

```bash
# 启动服务
npm start

# 或者使用 Docker
docker-compose up -d
```

## 📚 使用教程

- [Day1 - 自动化发布小红书](/tools/openclaw/day1)
- [Day2 - 我也"养虾"了，说说大实话](/tools/openclaw/day2)

## 🔗 相关链接

- [GitHub 仓库](https://github.com/openclaw/openclaw)
- [官方文档](https://docs.openclaw.ai)
- [Discord 社区](https://discord.gg/clawd)

---

> **效率提示**：自动化不是替代思考，而是解放时间去思考更重要的事！

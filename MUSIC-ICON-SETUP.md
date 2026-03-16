# 背景音乐和图标设置指南

## 🎵 添加背景音乐

### 音乐文件：平凡之路钢琴曲

**步骤 1：获取音乐文件**

从以下任一来源下载《平凡之路》钢琴曲：

1. **网易云音乐**
   - 搜索：平凡之路 钢琴版
   - 推荐版本：石进、The Daydream 等
   - 下载为 MP3 格式

2. **QQ 音乐**
   - 搜索：平凡之路 钢琴
   - 下载为 MP3 格式

3. **免版权音乐网站**
   - https://freemusicarchive.org/
   - https://pixabay.com/music/
   - 搜索：piano road 或 piano journey

**步骤 2：放置文件**

将下载的音乐文件：
- 重命名为：`bgm.mp3`
- 放到：`docs/public/` 目录

**步骤 3：提交推送**

```bash
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
git add docs/public/bgm.mp3
git commit -m "add: 背景音乐 - 平凡之路钢琴曲"
git push origin main
```

---

### 🎹 音乐配置说明

**当前配置**：
- ✅ 页面加载后自动尝试播放（1 秒延迟）
- ✅ 如果浏览器阻止，第一次点击页面任意位置时播放
- ✅ 右下角音乐按钮手动控制
- ✅ 循环播放
- ✅ 音量 30%

**浏览器限制**：
现代浏览器（Chrome、Safari 等）默认阻止自动播放音频，需要用户交互。所以实现了：
1. 页面加载时尝试播放
2. 如果被阻止，用户第一次点击页面任意位置时播放
3. 右下角按钮随时控制

---

## 🎨 网站图标

### 已创建的文件

**SVG 图标**：`/docs/public/favicon.svg`
- ✅ 已创建
- ✅ 现代浏览器支持
- ✅ 矢量图，任意大小清晰
- ✅ 主题：蓝色渐变 + 野径元素 + "野"字

**设计元素**：
- 深色背景（探索、未知）
- 蓝色渐变路径（野径、成长之路）
- 山峰剪影（挑战、逆袭）
- "野"字（品牌标识）
- 光点装饰（希望、梦想）

---

### 生成 PNG 格式（可选但推荐）

**方法 1：在线转换**

访问：https://convertio.co/zh/svg-png/

1. 上传 `favicon.svg`
2. 转换为 PNG
3. 下载并生成以下尺寸：
   - `favicon-32x32.png` (32x32)
   - `apple-touch-icon.png` (180x180)

**方法 2：使用 ImageMagick（本地）**

```bash
# 安装 ImageMagick
# Ubuntu/Debian:
sudo apt install imagemagick

# Mac:
brew install imagemagick

# 转换
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io/docs/public
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
```

**方法 3：使用 Favicon 生成器**

访问：https://realfavicongenerator.net/

1. 上传 `favicon.svg`
2. 生成所有需要的尺寸
3. 下载并替换对应文件

---

### 提交图标文件

```bash
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
git add docs/public/favicon*.png docs/public/apple-touch-icon.png
git commit -m "add: 网站图标 PNG 版本"
git push origin main
```

---

## 🎨 图标预览

### SVG 图标代码位置
`docs/public/favicon.svg`

### 显示效果
- **浏览器标签页**：显示"野"字图标
- **书签**：显示完整图标
- **移动端主屏幕**：显示 Apple Touch Icon
- **分享卡片**：使用 SVG 图标

---

## 🎵 音乐 + 图标测试

### 测试步骤

1. 添加音乐文件后推送
2. 访问：https://youbeile1203.cn/
3. 检查：
   - [ ] 浏览器标签页显示新图标
   - [ ] 1 秒后自动播放音乐（或点击页面后播放）
   - [ ] 右下角音乐按钮可控制
   - [ ] 鼠标悬停按钮有旋转动画

### 常见问题

**Q: 音乐不播放？**
A: 检查：
1. 文件是否正确命名为 `bgm.mp3`
2. 文件是否在 `docs/public/` 目录
3. 浏览器控制台是否有错误（F12）
4. 浏览器是否阻止了自动播放

**Q: 图标不显示？**
A: 检查：
1. 清除浏览器缓存（Ctrl+Shift+R）
2. 检查文件路径是否正确
3. 等待 GitHub Pages 部署完成

---

## 📊 文件清单

完成后的 `docs/public/` 目录：

```
docs/public/
├── CNAME                    # 自定义域名
├── custom.css               # 自定义样式
├── favicon.svg              # ✅ SVG 图标（已创建）
├── favicon-32x32.png        # ⏳ PNG 图标（可选）
├── apple-touch-icon.png     # ⏳ Apple 图标（可选）
├── hero.svg                 # ✅ 首页 Hero 图片
├── bgm.mp3                  # ⏳ 背景音乐（需添加）
├── robots.txt               # ✅ 搜索引擎协议
└── sitemap.xml              # ✅ 站点地图
```

---

## 🚀 快速完成

**最小化操作**（只需音乐）：

```bash
# 1. 下载平凡之路钢琴曲 MP3
# 2. 重命名为 bgm.mp3
# 3. 放到 docs/public/ 目录
cd /home/admin/.openclaw/workspace/feishu-operation/youbiele.github.io
git add docs/public/bgm.mp3
git commit -m "add: 背景音乐"
git push origin main
```

**图标已经创建 SVG 版本**，浏览器会自动使用！

---

**完成后访问网站测试效果！** 🎵🎨

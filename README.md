# 阿野的野径 - 个人博客

> 野径不通，那就踩出一条路

[![Deploy to GitHub Pages](https://github.com/zixing1095/youbiele.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/zixing1095/youbiele.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Update](https://img.shields.io/github/last-commit/zixing1095/youbiele.github.io)](https://github.com/zixing1095/youbiele.github.io/commits/main)

🌐 **线上地址**：[https://youbeile1203.cn](https://youbeile1203.cn)

---

## 📖 关于本站

这是阿野的个人博客，记录一个普通人的逆袭之路。

- 🎓 **双非本科** · 在职读研
- 💻 **程序员** · 技术爱好者
- 📚 **终身学习者** · 坚持输出
- ✈️ **旅行爱好者** · 看世界

### 核心主题

| 主题 | 描述 |
|------|------|
| 📚 Python 学习 | 从 0 到 1，3 个月入门实战 |
| 🗣️ 英语自救 | 英语渣的 6 个月交流计划 |
| 🎓 在职读研 | 双非本逆袭 985/211 |
| 🤖 OpenClaw | 打工人效率提升神器 |
| ✈️ 旅行生活 | 工作再忙也要看世界 |
| 💡 个人成长 | 普通人的自救之路 |

---

## 🚀 技术栈

- **框架**: [VitePress](https://vitepress.dev/) - Vue 驱动的静态网站生成器
- **托管**: [GitHub Pages](https://pages.github.com/)
- **域名**: [Cloudflare](https://www.cloudflare.com/) DNS 解析
- **构建**: Node.js + npm
- **部署**: GitHub Actions 自动部署

### 特性

- ✅ **响应式设计** - 完美适配 PC 和移动端
- ✅ **暗色主题** - 自动/手动切换
- ✅ **SEO 优化** - Sitemap、结构化数据、Open Graph
- ✅ **动效交互** - 悬停动画、渐变效果
- ✅ **背景音乐** - 平凡之路钢琴曲（可控制）
- ✅ **自定义图标** - 品牌化 Favicon
- ✅ **快速加载** - 优化的资源和 CDN

---

## 📁 项目结构

```
youbiele.github.io/
├── docs/                      # 文档目录
│   ├── .vitepress/            # VitePress 配置
│   │   ├── config.ts          # 网站配置（SEO、主题等）
│   │   └── dist/              # 构建输出
│   ├── public/                # 静态资源
│   │   ├── favicon.svg        # 网站图标
│   │   ├── custom.css         # 自定义样式
│   │   ├── bgm.mp3            # 背景音乐
│   │   ├── hero.svg           # 首页 Hero 图片
│   │   ├── sitemap.xml        # 站点地图
│   │   └── robots.txt         # 搜索引擎协议
│   ├── index.md               # 首页
│   ├── about.md               # 关于我
│   ├── blog/                  # 博客文章
│   │   ├── index.md
│   │   └── day1-wild-path.md
│   ├── learn/                 # 学习笔记
│   │   ├── python/            # Python 学习
│   │   └── english/           # 英语学习
│   └── tools/                 # 工具教程
│       └── openclaw/          # OpenClaw 教程
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
├── package.json               # 项目依赖
├── build.mjs                  # 构建脚本（ESM 兼容）
└── README.md                  # 项目说明
```

---

## 🛠️ 本地开发

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
# 本地预览（热重载）
npm run docs:dev

# 访问 http://localhost:5173
```

### 构建生产版本

```bash
# 构建静态文件
npm run docs:build

# 本地预览生产构建
npm run docs:preview
```

### 部署

```bash
# 提交更改
git add .
git commit -m "feat: 更新内容"
git push origin main

# GitHub Actions 会自动部署到 GitHub Pages
```

---

## 📝 内容创作

### 添加新文章

1. **在对应目录创建 `.md` 文件**

```bash
# 博客文章
touch docs/blog/day2-new-post.md

# 学习笔记
touch docs/learn/python/day2-basics.md
```

2. **添加 Front Matter**

```markdown
---
title: 文章标题
description: 文章描述（SEO）
keywords: 关键词 1，关键词 2
date: 2026-03-16
tags: [标签 1, 标签 2]
---

# 文章标题

正文内容...
```

3. **更新配置（如需要）**

编辑 `docs/.vitepress/config.ts`，在 `sidebar` 中添加新页面的导航。

4. **推送部署**

```bash
git add .
git commit -m "feat: 添加新文章"
git push origin main
```

---

## 🎨 自定义样式

### 修改主题色

编辑 `docs/public/custom.css`：

```css
:root {
  --vp-c-brand: #4a9eff;      /* 主色调 */
  --vp-c-brand-light: #6eb4ff; /* 浅色 */
  --vp-c-brand-dark: #2d7dd2;  /* 深色 */
}
```

### 添加新动效

在 `custom.css` 中添加 CSS 动画：

```css
@keyframes yourAnimation {
  from { /* ... */ }
  to { /* ... */ }
}

.your-element {
  animation: yourAnimation 1s ease;
}
```

---

## 🎵 背景音乐

### 添加/更换音乐

1. 准备 MP3 文件（建议 < 5MB）
2. 重命名为 `bgm.mp3`
3. 放到 `docs/public/` 目录
4. 提交推送

```bash
git add docs/public/bgm.mp3
git commit -m "add: 背景音乐"
git push origin main
```

### 控制播放

- 右下角音乐按钮 🎵 点击播放/暂停
- 页面加载时自动尝试播放（浏览器可能阻止）
- 第一次点击页面任意位置时也会触发播放

---

## 🔍 SEO 优化

### 已实现

- ✅ Meta 标签（Title、Description、Keywords）
- ✅ Open Graph（社交媒体分享）
- ✅ Twitter Card
- ✅ 结构化数据（JSON-LD）
- ✅ Sitemap（站点地图）
- ✅ Robots.txt
- ✅ Canonical URL
- ✅ 移动友好

### 提交到搜索引擎

1. **Google Search Console**
   - 访问：https://search.google.com/search-console
   - 添加网站并验证
   - 提交 Sitemap：`sitemap.xml`

2. **百度搜索资源平台**
   - 访问：https://ziyuan.baidu.com/
   - 添加网站并验证
   - 提交 Sitemap

3. **Bing Webmaster Tools**
   - 访问：https://www.bing.com/webmasters
   - 添加网站并验证

---

## 📊 更新日志

### 2026-03-16

- ✅ SEO 优化（Sitemap、Robots.txt、Open Graph）
- ✅ 自定义网站图标（SVG）
- ✅ 背景音乐功能
- ✅ 动效优化（悬停、渐变）
- ✅ 内容补全（所有导航页面）

### 2026-03-15

- ✅ 网站初始化
- ✅ VitePress 配置
- ✅ GitHub Pages 部署
- ✅ 自定义域名配置

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 开发流程

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

## 📬 联系我

- **博客**: [https://youbeile1203.cn](https://youbeile1203.cn)
- **GitHub**: [@zixing1095](https://github.com/zixing1095)
- **邮箱**: coming soon...

---

## 🙏 致谢

感谢以下开源项目：

- [VitePress](https://vitepress.dev/) - 强大的静态网站生成器
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [GitHub Pages](https://pages.github.com/) - 免费的网站托管
- [Cloudflare](https://www.cloudflare.com/) - DNS 和 CDN 服务

---

> **野径不通，那就踩出一条路。** 🚀

---

*Last updated: 2026-03-17*

---
title: Day2-野径日记 - 我用GitHub Pages搭了个博客，白嫖的那种
description: 个人网页开发全记录，从0到1搭建GitHub Pages博客，踩坑与经验分享。打工人的野径探索。
keywords: GitHub Pages，博客搭建，VitePress，野径日记，在职逆袭
date: 2026-03-16
tags: [野径日记，Day2，GitHub Pages，博客搭建]
---

# 🌿 野径日记 Day2 - 我用GitHub Pages搭了个博客，白嫖的那种

## 📌 写在前面

昨天说了要学Python、学英语、在职读研。

但我想了下，光学不行啊，总得留点痕迹。

**万一哪天我坚持下去了呢？**

万一有人想看看我是怎么踩坑的呢？

于是，我决定：**搭个博客**。

---

## 💡 为什么要自己搭博客？

你们可能会问：

> 为什么不直接用掘金、简书、公众号？

好问题。

我仔细想了一下：

| 平台 | 优点 | 缺点 |
|------|------|------|
| 掘金 | 流量大 | 限制多 |
| 简书 | 简单 | 体验一般 |
| 公众号 | 私域强 | 难搜索 |
| **自己的博客** | **完全可控** | **要动手** |

我想写的：
- 是我的成长轨迹
- 是我的踩坑记录
- 是我想给同路人的一句话

**自己的地儿，想怎么写怎么写。**

---

## 🔧 技术选型

### 我的选择：GitHub Pages + VitePress

| 工具 | 用途 |
|------|------|
| GitHub Pages | 托管（免费） |
| VitePress | 静态网站生成 |
| Git | 版本管理 |

**成本：0元**

为什么选这个？

1. **免费**：GitHub白送
2. **快**：VitePress 基于 Vite，超快
3. **简单**：会写 Markdown 就能上手
4. **酷**：程序员都用这个（主要是免费）

---

## ⚙️ 开发流程（手把手）

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击 `New Repository`
3. 仓库名：`你的用户名.github.io`
4. 设置为 `Public`
5. 点 Create

### 第二步：克隆到本地

```bash
# 替换成你的用户名
git clone https://github.com/zixing1095/zixing1095.github.io.git
cd zixing1095.github.io
```

### 第三步：安装 VitePress

```bash
# 初始化 npm
npm init -y

# 安装 VitePress
npm install -D vitepress vue

# 创建文档目录
mkdir docs
```

### 第四步：配置 VitePress

创建 `docs/.vitepress/config.js`：

```javascript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "阿野的野径",
  description: "双非本的打工人逆袭之路",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about' },
      { text: '博客', link: '/blog/' }
    ],
    sidebar: [
      {
        text: '博客',
        items: [
          { text: 'Day1 - 我是阿野', link: '/blog/day1-wild-path' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zixing1095' }
    ]
  }
})
```

### 第五步：写第一篇文章

创建 `docs/index.md`：

```markdown
# 👋 欢迎来到阿野的野径

这里是阿野的成长记录。

[进入博客](/blog/day1-wild-path)
```

### 第六步：本地预览

```bash
npx vitepress dev docs
```

打开本地预览查看

### 第七步：部署上线

```bash
# 添加到 git
git add .
git commit -m "feat: 博客上线"
git push origin main
```

等待 1-2 分钟，访问：`https://你的用户名.github.io`

---

## ⚠️ 我踩过的坑

### 坑1：仓库名写错了

**问题**：仓库名不是 `用户名.github.io`

**教训**：严格按格式来，一个字符都不能差

### 坑2：分支选错了

**问题**：默认分支是 main 还是 master 搞不清楚

**教训**：GitHub 现在默认是 main，确认好再推

### 坑3：CSS 样式不生效

**问题**：修改主题样式没效果

**教训**：VitePress 需要 `npm run docs:build` 重新构建

### 坑4：图片显示不了

**问题**：相对路径在本地能看，部署后挂了

**教训**：用 GitHub 的绝对路径，或者用图床

---

## 📊 今日耗时

| 任务 | 耗时 |
|------|------|
| 选型调研 | 15 分钟 |
| 仓库创建 | 5 分钟 |
| VitePress 配置 | 30 分钟 |
| 踩坑排查 | 20 分钟 |
| Day1 文章 | 40 分钟 |
| 部署上线 | 10 分钟 |
| **总计** | **120 分钟** |

---

## 🎯 明天预告

- 博客美化：添加主题色、动画
- 自动部署：GitHub Actions
- 更多文章：Python学习、OpenClaw、英语

---

## 💬 互动时间

你们有自己的博客吗？
搭建过程中踩过什么坑？
评论区聊聊～

**PS：明天发第一个 Python 小工具，批量重命名文件那种。**

敬请期待。

---

📍 阿野的野径 - Day2  
🎯 同行者，评论区见  
「野径不通，那就踩出一条路」

[→ 返回小红书查看原文](https://www.xiaohongshu.com/explore/xxx)
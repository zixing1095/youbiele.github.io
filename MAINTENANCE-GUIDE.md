# 博客维护指南

## 📝 每次修改时的标准流程

### 1. 本地修改

```bash
# 切换到 main 分支
git checkout main

# 修改内容
# ... 编辑文件 ...

# 查看更改
git status
git diff
```

### 2. 提交前检查

```bash
# 确保所有更改都已暂存
git add .

# 查看将要提交的内容
git status
```

### 3. 提交并推送

```bash
# 提交（使用清晰的提交信息）
git commit -m "feat: 描述你的更改"

# 推送
git push origin main
```

### 4. 自动部署

GitHub Actions 会自动：
1. ✅ 更新 README.md 时间戳
2. ✅ 构建网站
3. ✅ 部署到 gh-pages 分支
4. ✅ 提交 README 更新

---

## 📋 提交信息规范

### 类型前缀

| 前缀 | 说明 | 示例 |
|------|------|------|
| `feat:` | 新功能 | `feat: 添加 Python 学习路线` |
| `fix:` | 修复 bug | `fix: 修复导航链接错误` |
| `docs:` | 文档更新 | `docs: 更新 README` |
| `style:` | 代码格式 | `style: 格式化代码` |
| `refactor:` | 重构 | `refactor: 优化构建脚本` |
| `chore:` | 构建/工具 | `chore: 更新依赖` |
| `perf:` | 性能优化 | `perf: 优化图片加载` |
| `test:` | 测试 | `test: 添加单元测试` |

### 好的提交信息示例

```bash
feat: 添加 Python 学习 Day2 文章
fix: 修复移动端导航栏显示问题
docs: 更新 README 安装说明
feat: SEO 优化，添加 sitemap 和 robots.txt
chore: 更新 README 时间戳
```

### 不好的提交信息示例

```bash
# ❌ 太模糊
update
fix bug
changes

# ❌ 没有说明内容
修改了一些文件
更新博客
```

---

## 🎯 内容更新清单

### 添加新文章时

- [ ] 创建 `.md` 文件
- [ ] 添加 Front Matter（title、description、keywords）
- [ ] 编写内容
- [ ] 更新 `config.ts` 中的导航
- [ ] 本地测试 `npm run docs:dev`
- [ ] 提交推送

### 修改现有内容时

- [ ] 检查拼写和语法
- [ ] 更新最后修改日期
- [ ] 本地预览确认
- [ ] 提交推送

### 添加新页面时

- [ ] 创建页面文件
- [ ] 在 `config.ts` 中添加导航
- [ ] 更新 `sitemap.xml`（如需要）
- [ ] 测试链接
- [ ] 提交推送

---

## 🔧 常用命令

```bash
# 本地开发
npm run docs:dev

# 构建
npm run docs:build

# 更新 README
npm run update:readme

# 查看 Git 状态
git status
git log --oneline -10

# 查看远程部署
gh run list --repo zixing1095/youbiele.github.io
```

---

## 📊 GitHub Actions 工作流

### 自动执行步骤

1. **Checkout** - 拉取代码
2. **Setup Node** - 配置 Node.js
3. **Install** - 安装依赖
4. **Update README** - 更新时间戳 ✨
5. **Commit README** - 提交 README 更新
6. **Build** - 构建网站
7. **Deploy** - 部署到 gh-pages

### 查看部署状态

访问：https://github.com/zixing1095/youbiele.github.io/actions

或命令行：
```bash
gh run list --repo zixing1095/youbiele.github.io --limit 5
```

---

## 🎨 样式自定义

### 修改主题色

编辑 `docs/public/custom.css`：

```css
:root {
  --vp-c-brand: #4a9eff;      /* 主色调 */
  --vp-c-brand-light: #6eb4ff;
  --vp-c-brand-dark: #2d7dd2;
}
```

### 添加新组件

1. 在 `docs/.vitepress/theme/` 创建组件
2. 在 `config.ts` 中引入
3. 测试效果

---

## 🎵 音乐管理

### 添加/更换背景音乐

```bash
# 下载音乐
# 重命名为 bgm.mp3
# 放到 docs/public/

git add docs/public/bgm.mp3
git commit -m "add: 背景音乐 - 平凡之路钢琴曲"
git push origin main
```

### 调整音量

编辑 `docs/index.md` 中的 `audio.volume`：

```javascript
audio.volume = 0.3  // 0.0 - 1.0
```

---

## 🖼️ 图标管理

### 更新网站图标

1. 准备 SVG 文件
2. 放到 `docs/public/favicon.svg`
3. 提交推送

```bash
git add docs/public/favicon.svg
git commit -m "update: 更新网站图标"
git push
```

### 生成 PNG 版本

使用在线工具：https://realfavicongenerator.net/

---

## 📈 SEO 维护

### 定期检查

- [ ] 检查 Google Search Console 收录
- [ ] 检查百度搜索资源平台
- [ ] 更新 sitemap.xml
- [ ] 检查死链

### 优化建议

- 每篇文章都有独特的 title 和 description
- 包含相关关键词
- 添加内部链接
- 使用 H1、H2、H3 标题结构

---

## 🐛 常见问题

### Q: 部署失败怎么办？

A: 
1. 查看 GitHub Actions 日志
2. 检查错误信息
3. 本地运行 `npm run docs:build` 测试
4. 修复后重新推送

### Q: README 没有自动更新？

A:
1. 检查工作流是否运行
2. 查看 Actions 日志
3. 手动运行 `npm run update:readme`
4. 提交推送

### Q: 网站没有更新？

A:
1. 清除浏览器缓存（Ctrl+Shift+R）
2. 检查部署是否完成
3. 查看 gh-pages 分支
4. 等待几分钟（CDN 缓存）

---

## 📅 维护计划

### 每周

- [ ] 检查网站访问统计
- [ ] 回复评论和反馈
- [ ] 检查死链

### 每月

- [ ] 更新依赖包
- [ ] 检查 SEO 排名
- [ ] 备份内容

### 每季度

- [ ] 审查网站性能
- [ ] 更新过时内容
- [ ] 添加新功能

---

## 🔗 相关资源

- [VitePress 文档](https://vitepress.dev/)
- [GitHub Pages 文档](https://pages.github.com/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [SEO 入门指南](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

**保持更新，持续改进！** 🚀

*Last updated: 2026-03-16*

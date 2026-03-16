# Day1 - 自动化发布小红书

> 用 OpenClaw 实现内容自动发布

## 🎯 目标

使用 OpenClaw 自动发布小红书笔记，节省运营时间。

## 📝 准备工作

### 1. 获取小红书 Cookie

1. 打开浏览器，访问小红书网页版
2. 登录你的账号
3. 按 F12 打开开发者工具
4. 找到 Cookie 中的 `a1`、`web_session` 等字段
5. 复制保存

### 2. 配置 OpenClaw

在 `.env` 文件中添加：
```bash
XIAOHONGSHU_COOKIE=your_cookie_here
```

## 🚀 发布流程

### 方法一：命令行发布

```bash
# 准备笔记内容
echo "这是一篇测试笔记" > content.txt

# 准备图片
# 将图片放在 images/ 目录

# 发布
openclaw xiaohongshu publish \
  --title "我的第一篇自动笔记" \
  --content content.txt \
  --images images/cover.jpg
```

### 方法二：API 调用

```javascript
const { XiaohongshuClient } = require('openclaw');

const client = new XiaohongshuClient({
  cookie: process.env.XIAOHONGSHU_COOKIE
});

await client.publish({
  title: '我的第一篇自动笔记',
  content: '这是一篇测试笔记',
  images: ['./images/cover.jpg']
});
```

## 📋 笔记模板

```markdown
# 标题

正文内容...

## 标签
#个人成长 #学习笔记 #自律
```

## ⚠️ 注意事项

1. **不要频繁发布** - 每天 1-3 篇即可
2. **内容质量** - 自动化不是发垃圾内容的理由
3. **遵守规则** - 不要违反平台规定
4. **定期检查** - 确保发布成功

## ✅ 效果追踪

发布后检查：
- 浏览量
- 点赞数
- 收藏数
- 评论互动

---

> **提示**：自动化是工具，内容才是核心！

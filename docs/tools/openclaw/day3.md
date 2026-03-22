---
title: Day3 - 定时任务与自动化调度
description: OpenClaw定时任务功能详解，帮你实现自动化工作流程。
keywords: OpenClaw, 定时任务, 自动化, 工作流, 效率工具
---

# Day3 - 定时任务与自动化调度

> 让电脑自动干活，才是真正的效率提升

## 🎯 今日目标

- [x] 理解定时任务概念
- [x] 掌握cron表达式
- [x] 配置定时自动推送
- [x] 实现每日学习打卡

## 📝 学习内容

### 1. 什么是定时任务？

定时任务 = 设定一个时间，让电脑自动执行某个操作。

**应用场景**：
- 每天早上自动推送天气
- 每周一自动提醒周报
- 每天定时备份文件
- 定时检查网站状态

### 2. Cron 表达式

OpenClaw 使用 cron 表达式来设定时间：

| 字段 | 含义 | 取值范围 |
|------|------|----------|
| minute | 分钟 | 0-59 |
| hour | 小时 | 0-23 |
| day | 日期 | 1-31 |
| month | 月份 | 1-12 |
| weekday | 星期 | 0-6 |

**常用示例**：

```bash
# 每天早上9点
0 9 * * *

# 每周一早上9点
0 9 * * 1

# 每天早上9点到晚上6点，每小时
0 9-18 * * *

# 每周三和周五下午5点
0 17 * * 3,5

# 每天0点（午夜）
0 0 * * *
```

### 3. 定时推送天气

```yaml
# 定时任务配置
cron: "0 7 * * *"  # 每天早上7点
actions:
  - type: fetch_weather
    city: "上海"
  - type: send_message
    channel: dingtalk
    message: "早安！今天{{city}}天气：{{weather}}，温度{{temp}}°C"
```

### 4. 每日学习打卡提醒

```yaml
# 每天晚上10点提醒学习
cron: "0 22 * * *"
actions:
  - type: send_message
    channel: dingtalk
    message: |
      📚 学习提醒
      
      今天的Python和英语学了吗？
      坚持就是胜利！💪
```

### 5. 每周周报自动生成

```yaml
# 每周五下午6点
cron: "0 18 * * 5"
actions:
  - type: generate_weekly_report
    template: "default"
  - type: send_message
    channel: dingtalk
    message: "周末愉快！这是你的周报总结..."
```

## 💻 今日实践

### 配置每日自动推送

```bash
# 创建定时任务
openclaw task create daily-learning \
  --cron "0 22 * * *" \
  --action "send_reminder"
```

### 查看定时任务

```bash
# 列出所有定时任务
openclaw task list

# 查看任务状态
openclaw task status daily-learning
```

### 删除定时任务

```bash
# 删除任务
openclaw task delete daily-learning
```

## ⚠️ 常见坑

1. **时区问题**
   - 默认使用服务器时区
   - 中国区服务器通常是 UTC+8

2. **任务重叠**
   - 如果任务执行时间过长，不要设置太短的间隔
   - 建议间隔至少5分钟

3. **权限问题**
   - 确保定时任务有足够权限执行操作

## ✅ 今日总结

- 理解了定时任务的概念 ✓
- 掌握了cron表达式 ✓
- 配置了每日学习提醒 ✓

## 📅 下一步

明天学习：多步骤工作流

---

> **让电脑自动干活，才是真正的效率提升**
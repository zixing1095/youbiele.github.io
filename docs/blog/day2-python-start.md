---
title: Day2 - 装好Python，写出第一个"Hello World"
description: Python环境搭建全流程，踩坑记录与避坑指南。从0开始的Python学习Day2。
keywords: Python安装，Python入门，Hello World，Anaconda，VS Code
date: 2026-03-16
tags: [Python学习，Day2，环境搭建]
---

# 👋 Day2 - 装好Python，写出第一个"Hello World"

## 📌 今日目标

- 安装 Python 环境
- 选对编辑器
- 写出第一行代码

## 🔧 环境选择

### 我的选择

| 工具 | 用途 | 推荐理由 |
|------|------|----------|
| Anaconda | Python 发行版 | 预装常用库，不用手动折腾 |
| VS Code | 代码编辑器 | 免费、轻量、插件丰富 |
| Git | 版本控制 | 记录学习轨迹 |

### 为什么不用纯 Python？

Anaconda 预装了：
- NumPy、Pandas（数据分析）
- Jupyter Notebook（交互式编程）
- 虚拟环境管理（避免版本冲突）

**省心 > 省空间**

## ⚠️ 踩坑记录

### 坑1：版本选择

**问题**：Python 2 和 Python 3 区别很大
**解决**：无脑选 **Python 3.11+**（最新稳定版）

```bash
# 终端检查
python --version
python3 --version
```

### 坑2：环境变量

**问题**：安装后命令行找不到 python
**解决**：勾选 "Add Python to PATH"

或者手动配置：
```bash
# Windows PowerShell
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Python311", "User")
```

### 坑3：编辑器选择

**问题**：Notepad++ 太简陋，PyCharm 太重
**解决**：VS Code + Python 插件

插件推荐：
- Python（微软官方）
- Pylance（代码诊断）
- Jupyter（Notebook支持）

## 💻 第一个程序

### 代码

```python
# hello.py
print("Hello, World!")
print("我是阿野，这是我的第一行Python代码")
print("野径不通，那就踩出一条路")
```

### 运行

```bash
python hello.py
```

### 输出

```
Hello, World!
我是阿野，这是我的第一行Python代码
野径不通，那就踩出一条路
```

## 📊 今日耗时

| 任务 | 耗时 |
|------|------|
| 下载 Anaconda | 15 分钟 |
| 安装配置 | 10 分钟 |
| VS Code 配置 | 10 分钟 |
| 第一个程序 | 5 分钟 |
| **总计** | **40 分钟** |

## 🎯 明日计划

- 变量和数据类型
- 第一个小工具：批量重命名文件
- 效率提升目标：+5%

## 💬 互动时间

你们Python环境装好了吗？
遇到过什么坑？
评论区聊聊～

---

📍 阿野的野径 Day2  
🎯 同行者，评论区见  
「野径不通，那就踩出一条路」

[→ 返回小红书查看原文](https://www.xiaohongshu.com/explore/xxx)
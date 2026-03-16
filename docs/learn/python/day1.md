---
title: Day1 - Python 环境搭建教程
description: Python 3 环境搭建完整教程，包含 Windows、Mac、Linux 安装步骤，第一个 Python 程序，基础语法速览。适合零基础入门。
keywords: Python 教程，Python 环境搭建，Python 安装，Python 入门，Python 基础语法
---

# Day1 - 环境搭建

> 工欲善其事，必先利其器

## 🎯 今日目标

- [ ] 安装 Python 3.x
- [ ] 配置开发环境
- [ ] 运行第一个 Python 程序
- [ ] 了解基础语法

## 📝 学习内容

### 1. Python 安装

**Windows**:
```bash
# 下载 Python 3.x 安装包
# 官网：https://www.python.org/downloads/
# 安装时勾选 "Add Python to PATH"
```

**Mac**:
```bash
# 使用 Homebrew 安装
brew install python@3
```

**Linux**:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# CentOS/RHEL
sudo yum install python3 python3-pip
```

### 2. 验证安装

```bash
python3 --version
# 输出：Python 3.x.x

pip3 --version
# 输出：pip x.x.x
```

### 3. 第一个 Python 程序

创建 `hello.py`:
```python
print("Hello, World!")
print("你好，阿野的野径！")
```

运行：
```bash
python3 hello.py
```

### 4. 基础语法速览

```python
# 变量
name = "阿野"
age = 25

# 条件判断
if age >= 18:
    print("成年人")
else:
    print("未成年")

# 循环
for i in range(5):
    print(f"第 {i+1} 天")

# 函数
def greet(name):
    return f"你好，{name}！"

print(greet("阿野"))
```

## ✅ 今日总结

- Python 安装完成 ✓
- 开发环境配置完成 ✓
- 理解了基础语法 ✓

## 📅 下一步

明天学习：数据类型与运算符

---

> **小贴士**：遇到问题先查官方文档，善用 Google 和 Stack Overflow！

---
title: Day4 - 条件判断，让程序学会"动脑子"
description: Python条件判断详解，if/else/if-elif-else语句，实战案例：成绩查询系统、闰年判断、登录验证。适合零基础Python学习者。
keywords: Python条件判断, if语句, else语句, elif, 编程基础, 决策逻辑, Python教程
date: 2026-04-01
tags: [Python, 条件判断, 编程基础]
---

# Day4 - 条件判断，让程序学会"动脑子"

> 学会了 if/else，你的程序终于能自己做决定了！

## 🎯 今日目标

- 理解条件判断的概念
- 掌握 if、if-else、if-elif-else 语法
- 写一个成绩查询系统
- 了解三元运算符

## 💡 什么是条件判断？

条件判断就是**程序根据不同的条件，做出不同的决策**。

就像生活中：
- 如果下雨 → 带伞
- 否则 → 不带伞
- 如果温度低于0度 → 穿棉衣
- 否则如果低于15度 → 穿外套
- 否则 → 穿短袖

## 📝 Python 的条件判断语法

### 1. 最简单的 if 语句

```python
age = 25

if age >= 18:
    print("你成年了")
```

### 2. if - else 语句

```python
score = 85

if score >= 60:
    print("考试通过 ✅")
else:
    print("考试未通过 ❌")
```

### 3. if - elif - else 语句（多条件判断）

```python
score = 85

if score >= 90:
    print("优秀！A")
elif score >= 80:
    print("良好！B")
elif score >= 70:
    print("中等！C")
elif score >= 60:
    print("及格！D")
else:
    print("不及格！F")
```

> ⚠️ 注意：Python 用的是 `elif` 而不是 `else if`！

## 💻 今日代码 - 成绩查询系统

```python
# 成绩查询系统（阿野版）

name = input("请输入你的名字：")
score = int(input("请输入你的成绩："))

print(f"\n===== 成绩查询 =====")
print(f"姓名：{name}")

# 判断成绩等级
if score > 100 or score < 0:
    print("错误：成绩必须在 0-100 之间！")
elif score == 100:
    print("等级：SS（满分！）🏆")
elif score >= 90:
    print("等级：A（优秀）⭐")
elif score >= 80:
    print("等级：B（良好）👍")
elif score >= 70:
    print("等级：C（中等）📚")
elif score >= 60:
    print("等级：D（及格）✅")
else:
    print("等级：F（不及格）💪")

# 判断是否需要补考
if score < 60:
    print("\n⚠️ 通知：需要参加补考")
else:
    print("\n✅ 通知：恭喜通过，无需补考")
```

**运行结果**：
```
请输入你的名字：阿野
请输入你的成绩：85

===== 成绩查询 =====
姓名：阿野
等级：B（良好）👍

✅ 通知：恭喜通过，无需补考
```

## 🔥 实战场景

### 场景1：用户登录验证

```python
username = "阿野"
password = "python123"

input_user = input("用户名：")
input_pass = input("密码：")

if input_user == username and input_pass == password:
    print("✅ 登录成功！")
elif input_user != username:
    print("❌ 用户名不存在")
else:
    print("❌ 密码错误")
```

### 场景2：闰年判断

```python
year = int(input("请输入年份："))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")
```

## ⚠️ 常见坑

1. **忘记英文冒号 `:`**
   - `if score >= 60 print("通过")` → ❌
   - `if score >= 60: print("通过")` → ✅

2. **缩进错误**
   - Python 靠缩进判断代码块，`if` 下面的代码必须缩进（建议4个空格）

3. **`=` 和 `==` 混淆**
   - `if score = 60:` → 这是赋值，不是比较！
   - `if score == 60:` → 这才是比较是否相等

4. **逻辑表达式错误**
   - `60 <= score <= 80 and` → 这种写法虽然Python支持，但推荐写成 `score >= 60 and score <= 80`

## 🎨 三元运算符（一行写法）

Python 支持一行写条件判断：

```python
# 传统写法
if age >= 18:
    status = "成年"
else:
    status = "未成年"

# 三元运算符 - 一行搞定！
status = "成年" if age >= 18 else "未成年"
```

## ✅ 今日总结

- 理解了条件判断的重要性 ✓
- 掌握了 if、if-else、if-elif-else ✓
- 写出了成绩查询系统 ✓
- 学会了三元运算符 ✓

## 📅 下一步

明天学习：**循环结构（for / while）** —— 让程序帮你重复干活，解放双手！

---

**互动时间**：你用条件判断做过什么有趣的小程序？我先说：做了个考试成绩查询器！

> 野径不通，踩出一条路

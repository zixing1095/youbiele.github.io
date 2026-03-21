---
title: Day2 - 变量与数据类型
description: Python变量、数据类型详解，包括字符串、整数、浮点数、布尔值的介绍和使用方法。
keywords: Python变量, 数据类型, Python基础, str, int, float, bool
---

# Day2 - 变量与数据类型

> 磨刀不误砍柴工

## 🎯 今日目标

- [x] 理解变量概念
- [x] 掌握4种基本数据类型
- [x] 学会类型转换
- [x] 编写第一个变量程序

## 📝 学习内容

### 1. 什么是变量？

变量就是**存储数据的容器**，就像记笔记的盒子。

```python
# 创建一个变量
name = "阿野"    # 把"阿野"放进name这个盒子里
age = 25         # 把25放进age这个盒子里
```

### 2. 四种基本数据类型

| 类型 | 名称 | 例子 | 用途 |
|------|------|------|------|
| `str` | 字符串 | `"阿野"` | 文字 |
| `int` | 整数 | `25` | 数字 |
| `float` | 浮点数 | `175.5` | 小数 |
| `bool` | 布尔值 | `True`/`False` | 判断 |

### 3. 字符串 (str)

用引号括起来的文字：

```python
name = "阿野"
hobby = '编程'
message = """
这是一个
多行字符串
"""
```

### 4. 整数 (int)

不带小数点的数字：

```python
age = 25
year = 2026
count = 100
```

### 5. 浮点数 (float)

带小数点的数字：

```python
height = 175.5
price = 19.99
pi = 3.14159
```

### 6. 布尔值 (bool)

表示真假（注意首字母大写）：

```python
is_student = True
has_job = False
is_learning = True
```

### 7. 类型转换

有时需要类型之间互相转换：

```python
# 字符串转整数
num = int("25")      # "25" -> 25

# 整数转字符串
s = str(25)          # 25 -> "25"

# 字符串转浮点数
f = float("3.14")     # "3.14" -> 3.14

# 转布尔值
bool(1)               # True
bool(0)               # False
bool("")             # False
bool("hello")        # True
```

## 💻 今日代码

```python
# 我的第一个变量程序
name = "阿野"
age = 25
height = 175.5
is_learning = True

print(f"我是{name}，今年{age}岁")
print(f"身高{height}cm，正在学Python：{is_learning}")
```

输出：
```
我是阿野，今年25岁
身高175.5cm，正在学Python：True
```

## ⚠️ 常见坑

1. **字符串不加引号**
   - ❌ `name = 阿野` → 报错！
   - ✅ `name = "阿野"` → 正确

2. **True不是true**
   - ❌ `flag = true` → 报错！
   - ✅ `flag = True` → 正确

3. **"25"和25不一样**
   - ❌ `age = "25"` → 这是字符串
   - ✅ `age = 25` → 这是整数

## ✅ 今日总结

- 理解了变量就是存数据的盒子 ✓
- 掌握了4种基本数据类型 ✓
- 学会了类型转换 ✓
- 写了自己的第一个程序 ✓

## 📅 下一步

明天学习：运算符（+ - * / %）

---

> **继续加油！** 每天进步一点点
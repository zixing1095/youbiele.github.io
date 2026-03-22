---
title: Day3 - 运算符详解
description: Python运算符详解，包括算术、比较、逻辑运算符及其使用场景。
keywords: Python运算符, 算术运算符, 比较运算符, 逻辑运算符, Python基础
---

# Day3 - 运算符详解

> 会加减乘除，就能玩转Python

## 🎯 今日目标

- [x] 掌握算术运算符
- [x] 掌握比较运算符
- [x] 掌握逻辑运算符
- [x] 编写工资计算器

## 📝 学习内容

### 1. 算术运算符

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `+` | 加 | `5 + 3` | `8` |
| `-` | 减 | `5 - 3` | `2` |
| `*` | 乘 | `5 * 3` | `15` |
| `/` | 除 | `5 / 2` | `2.5` |
| `//` | 整除 | `5 // 2` | `2` |
| `%` | 取余 | `5 % 2` | `1` |
| `**` | 幂运算 | `2 ** 3` | `8` |

### 2. 整除 vs 除法

```python
print(5 / 2)    # 2.5 - 精确除法
print(5 // 2)   # 2 - 向下取整
```

**应用场景**：
- 分页：`total_pages = (total_items + page_size - 1) // page_size`
- 取整计算

### 3. 取余运算符 `%`

```python
print(5 % 2)    # 1 - 奇数
print(4 % 2)    # 0 - 偶数
```

**应用场景**：
- 判断奇偶
- 判断整除
- 循环计数

### 4. 比较运算符

| 运算符 | 名称 | 示例 | 结果 |
|--------|------|------|------|
| `==` | 等于 | `5 == 5` | `True` |
| `!=` | 不等于 | `5 != 3` | `True` |
| `>` | 大于 | `5 > 3` | `True` |
| `<` | 小于 | `5 < 3` | `False` |
| `>=` | 大于等于 | `5 >= 5` | `True` |
| `<=` | 小于等于 | `5 <= 3` | `False` |

### 5. 逻辑运算符

| 运算符 | 名称 | 说明 |
|--------|------|------|
| `and` | 与 | 都为True才为True |
| `or` | 或 | 有一个True就为True |
| `not` | 非 | 取反 |

```python
# and: 并且
age = 25
is_student = False
print(age >= 18 and is_student)  # True

# or: 或者
is_vip = True
is_member = False
print(is_vip or is_member)  # True

# not: 取反
is_closed = True
print(not is_closed)  # False
```

## 💻 今日代码

```python
# 工资计算器
base_salary = 8000      # 基本工资
overtime_hours = 10    # 加班时长
overtime_rate = 50      # 加班费/小时

# 计算加班费
overtime_pay = overtime_hours * overtime_rate

# 计算税前总工资
total = base_salary + overtime_pay

# 计算税后工资（税率15%）
tax = total * 0.15
net_salary = total - tax

# 输出结果
print(f"基本工资：{base_salary}元")
print(f"加班费：{overtime_pay}元")
print(f"税前总工资：{total}元")
print(f"扣税：{tax}元")
print(f"税后工资：{net_salary}元")
```

**运行结果**：
```
基本工资：8000元
加班费：500元
税前总工资：8500元
扣税：1275.0元
税后工资：7225.0元
```

## ⚠️ 常见坑

1. **== 和 = 混淆**
   - ❌ `if age = 18:` → 赋值，不是比较！
   - ✅ `if age == 18:` → 比较是否相等

2. **整除写错**
   - ❌ `5 / 2` → 得到2.5
   - ✅ `5 // 2` → 得到2

3. **逻辑运算符用错**
   - ❌ `age > 18 and < 30` → 报错！
   - ✅ `age > 18 and age < 30` → 正确

## ✅ 今日总结

- 掌握了7种算术运算符 ✓
- 掌握了6种比较运算符 ✓
- 掌握了3种逻辑运算符 ✓
- 编写了工资计算器 ✓

## 📅 下一步

明天学习：条件判断（if/else）

---

> **继续加油！** 运算符就是编程的计算器
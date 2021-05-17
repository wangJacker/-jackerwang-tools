---
title: 加、减、乘、除、四舍五入
---
# 加减乘除四舍五入：解决小数计算精度问题，以及四舍五入5不能入的问题

## 加

### 使用方法
```jsx
import { accAdd } from "@jackerwang/tools";
 const total = accAdd(num1,num2);
```

### num1、num2

| 参数        | 类型  | 
| ------------- |-------------|
| num1     | number/string|
| num2     | number/string    |


## 减

### 使用方法
```jsx
import { accSub } from "@jackerwang/tools";
 const difference = accSub(num1,num2); // difference = num1 - num2
```

### num1、num2

| 参数        | 类型  | 
| ------------- |-------------|
| num1     | number/string|
| num2     | number/string    |

## 乘

### 使用方法
```jsx
import { accMul } from "@jackerwang/tools";
 const mul = accMul(num1,num2); // mul = num1 * num2
```

### num1、num2

| 参数        | 类型  | 
| ------------- |-------------|
| num1     | number/string|
| num2     | number/string    |

## 除

### 使用方法
```jsx
import { accDiv } from "@jackerwang/tools";
 const div = accMul(num1,num2); // div = num1 / num2
```

### num1、num2

| 参数        | 类型  | 
| ------------- |-------------|
| num1     | number/string|
| num2     | number/string    |


## 四舍五入

### 使用方法
```jsx
import { toFixed } from "@jackerwang/tools";
 const number = toFixed(num,slide); 
```

### num1、num2

| 参数        | 类型  | 说明                 |
| ------------- |-------------|-------------|
| num     | number/string| 需要四舍五入的数|
| slide     | number/string    | 保留小数的位数|

::: tip-zh
有时候可能一个页面需要加减乘除，会引入加、减、乘、除四个方法，如果比觉得比较麻烦可以尝试引入 calculate 对象 分别包含加减乘除
:::

## calculate 对象

### 使用方法
```jsx
import { calculate } from "@jackerwang/tools";
//  加
 calculate.accAdd(num1,num2);
//  减
 calculate.accAdd(num1,num2);
//  乘
 calculate.accAdd(num1,num2);
//  除
 calculate.accAdd(num1,num2);
```
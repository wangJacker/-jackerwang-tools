---
title: "PrintButton"
---

# PrintButton 报表打印组件

## 文件位置
位置：@/compoents/PrintButton

## 属性
| 属性        | 说明           | 类型  | 默认值  |
| ------------- |-------------| --------------|-------|
| getPrintData     | 函数返回需要打印的数据|[Function](#getPrintData)|-|
| printToolVersion | 打印管理器的版本|  string | -|
| printTool| 打印管理器的下载地址     | string|-|
| showHeaderInPerPage| 是否每页显示表头     | boolean |false|
| showFooterInPerPage| 是否每页都显示表尾  |boolean|false|
| paperOrientation| 打印纸的方向   | 1:横向 &#124; 0 :纵向 |1|
| printProperty| 打印的各类属性   | [IProperty](#IProperty)|-|
| printConfirm| 打印前是否提示   | boolean|false|
| onOkCallback| 打印提示点击确认的回调函数   | function|-|
| onCancelCallback| 打印提示点击取消的回调函数   | function|-|
| confirmTitle| 需要打印提示时，提示内容是什么   | string|"是否保存草稿并打印?"|
| antd按钮的各属性| 需要改变打印按钮样式选择性书写button的属性   | antd按钮的各属性|-|

### <a id='getPrintData'>Function具体的返回值</a>

#### 1、普通对象
定义接口：
```ts
interface PrintData {
    itemCount: number //需要打印的总合计条数
    itemList: Array<object> // 需要打印的数字集合
}
```
示列：
```jsx
<EprintButton
    shape='round'
    ghost
    hidden={permissions.print}
    type='primary'
    printConfirm={!disabled}
    getPrintData={() => {
        const printData = billSerial.filter(item => item.name);
        return {
            itemCount: printData.length,
            itemList: printData
        }
    }}
    printTitle='付款单'
    >打印</EprintButton>
```
说明：用于打印不需要调用接口的打印数据，比如做单据录入时候打印数据

#### 2、promise对象
返回接口同上，唯一区别是打印接口返回的数据

示列：
```jsx
<EprintButton
    shape='round'
    ghost
    hidden={permissions.print}
    type='primary'
    printConfirm={!disabled}
    getPrintData={async () => {
        const printData = await getAll();
        return {
            itemCount: printData.length,
            itemList: printData
        }
    }}
    printTitle='付款单'
    >打印</EprintButton>
```
#### 3、数组
该类为预留类型，以便可在一页内容打印多表格预留返回值，目前因为打印管理器的问题还没有实现

### <a id='IProperty'>IProperty打印类的属性</a>
| 属性        | 说明           | 类型  | 默认值  |
| ------------- |-------------| --------------|-------|
| exclude     | 排除不需要打印的列|string[]|可以是表头中文名字,也可以是对应的filed|
| summation | 需要求和的列|  string[] | 可以是表头中文名字,也可以是对应的filed|
| columns| 打印的表头信息 | object[]|-|
| dataFiledName| 表头名称对应的key | stirng |antd table 为"title",aggrid为"headerName"|
| dataFiled| 表内容对应的字段key |string|antd table 为"dataIndex",aggrid为"field"|

::: tip-zh
dataFiledName属性和dataFiled属性为了解决aggrid表格打印和antd表格打印表头的区别
:::
## 使用方法

```jsx
<EprintButton
    shape='round'
    ghost
    hidden={permission.print}
    type='primary'
    printConfirm={!disabled}
    getPrintData={() => {
        const printData = billSerial.filter(item => item.baseProjectName);
        return {
            itemCount: printData.length,
            itemList: printData
        }
    }}
    printTitle='会计凭证'
    queryList={() => {
        const queryList = []
        // 编号
        queryList.push({ key: "单据编号", value: billCode })
        // 时间
        queryList.push({ key: "单据时间", value: billDate })
        // 店铺
        if (isWebStore) {
            const selectItem = props.commonStore.erpAllStores.items.find(item => item.id === abp.setting.get("storeId"))
            if (selectItem) {
                queryList.push({ key: '机构编号', value: selectItem.code });
                queryList.push({ key: '机构名称', value: selectItem.name });
                queryList.push({ key: '营业类型', value: selectItem.businessTypeName });
                queryList.push({ key: '机构电话', value: selectItem.storePhone });
                queryList.push({ key: '机构地址', value: `${selectItem.province}${selectItem.city}${selectItem.zone}${selectItem.address}` });
            }

        } else {
            const { value: storeId, searchValue: name, selectItem } = storeRef.current.getState()
            if (storeId) {
                queryList.push({ key: '机构编号', value: selectItem.code });
                queryList.push({ key: '机构名称', value: name });
                queryList.push({ key: '营业类型', value: selectItem.businessTypeName });
                queryList.push({ key: '机构电话', value: selectItem.storePhone });
                queryList.push({ key: '机构地址', value: `${selectItem.province}${selectItem.city}${selectItem.zone}${selectItem.address}` });
            }
        }

        // 经手r
        const { value: personId, searchValue: personName, selectItem: personItem } = personRef.current.getState()
        if (personId) {
            queryList.push({ key: '经手人编号', value: personItem.code });
            queryList.push({ key: '经手人名称', value: personName });
            queryList.push({ key: '经手人电话', value: personItem.phoneNumber });
            queryList.push({ key: '经手人邮箱', value: personItem.emailAddress });
        }

        if (comment) {
            queryList.push({ key: '摘要', value: comment });
        }
        if (remark) {
            queryList.push({ key: '附加说明', value: remark });
        }
        return queryList
    }}
    onOkCallback={async () => {
        await validateField()
    }}
    printProperty={{
        columns: lookColumnDefs,
        summation: ['借方', '贷方'],
        dataFiledName: "headerName",
        dataFiled: "field"
    }}
>打印</EprintButton>
```
  

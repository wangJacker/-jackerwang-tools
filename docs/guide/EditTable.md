---
title: EditTable1
---




# EditTable可编辑数据表格组件

## 文件位置
位置：@/compoents/EditTable
## 属性
::: tip-zh
EditTable基于aggrid组件实现更多方法可参考aggrid官网：<https://www.ag-grid.com/>
:::

| 属性        | 说明           | 类型  | 默认值  |
| ------------- |-------------| --------------|-------|
| pinnedBottomRowData     | 表格底部求和的列|any[] |-|
| frameworkComponents     | 各列编辑组件或者渲染组件|   - [详见](#frameworkComponents) | -|
| height| 表格组件的高度     | number|-|
| stopEditingWhenGridLosesFocus| 编辑状态中是否失去焦点停止编辑     | boolean |false|
| enableCellTextSelection|开启表格允许复制  |boolean|true|
| domLayout| aggrid表格布局方式   | 'normal' &#124; "autoHeight" &#124; "print"|'normal'|
| getRowClass| 表格Row的类名   | fuction:(node)=>(string &#124; string[])|-|
| className| aggrid外层的容器的类名  |string|-|
| style| aggrid外层的容器的样式   | React.CSSProperties|-|

### <a id="frameworkComponents">frameworkComponents属性</a>
frameworkComponents的使用需要结合columnDefs来使用：
```jsx

const columnDefs = [
    {
        headerName: "序号", field: "serialNumber", width: 66, pinned: 'left', flex: 0, minWidth: 66, suppressNavigable: true,
        // cellRenderer: (params) => params.value !== "合计" ? params.rowIndex + 1 : "合计",
        cellRendererParams: {
            purchaseReceiptStore: props.purchaseReceiptStore
        },
        cellRenderer: 'childMessageRenderer'
    },
    {
        headerName: "数量",
        field: "qty",
        resizable: true,
        cellEditor: 'numberEditor',
];

const frameworkComponents = {
        childMessageRenderer: DeleteCell,
        numberEditor: NumberEditor,
    }

//DeleteCell 、NumberEditor react组件

<EditTable frameworkComponents />
```

## 使用方法
```jsx
  const columnDefs = [
        {
            headerName: "序号", field: "serialNumber", width: 66, pinned: 'left', flex: 0, minWidth: 66, suppressNavigable: true,
            // cellRenderer: (params) => params.value !== "合计" ? params.rowIndex + 1 : "合计",
            cellRendererParams: {
                purchaseReceiptStore: props.purchaseReceiptStore
            },
            cellRenderer: 'childMessageRenderer'
            ,
        },
        ......
  ]
<EditTable ref={tableRef} ChangRowColor={ChangRowColor} columnDef={disabled ? lookColumnDefs : columnDefs} billSerial={billSerial} pinnedBottomRowData={[{ ...pinnedBottomRowData }]}></EditTable>
```
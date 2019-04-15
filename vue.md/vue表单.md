#### 表单

+ v-model 使表单和数据对象双向绑定,并且会根据控件类型自动选取更新元素
```
v-model会忽略所有表单元素
```
> v-model 在内部使用不同的属性为不同的输入元素并抛出不同的事件：

+ text 和 textarea 元素使用 value 属性和 input 事件；
+ checkbox 和 radio 使用 checked 属性和 change 事件；
+ select 字段将 value 作为 prop 并将 change 作为事件。
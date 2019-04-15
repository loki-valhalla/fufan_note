
## 条件渲染

> v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

> 你可以使用 v-else 指令来表示 v-if 的“else 块”




>在 (template) 元素上使用 v-if 条件渲染分组,因为 v-if 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个(template) 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含(template) 元素。

```
<div v-if="isUse">您的用户名可用</div>
<div v-else class="danger">用户名重复</div>

在下面的声明的对象中判断isUse,如果是true那么第一个div会出现反之第二个出现
```

>v-else-if，顾名思义，充当 v-if 的“else-if 块”，可以连续使用(类似于 v-else，v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后);

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

```

> v-show:根据条件展示元素,不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display(v-show 不支持 (template) 元素，也不支持 v-else。);


#### v-if和v-show的区别:

+ v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

+ v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

+ 相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

+ 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。


## 列表渲染

> v-for:把一个数组对应为一组元素,根据一组数组的选项列表进行渲染,v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。

```
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
结果:Foo Bar
```
> 一个对象的 v-for:也可以用 v-for 通过一个对象的属性来迭代,也可以提供第二个的参数为键名,第三个参数为索引：
```
<div v-for="(value, key) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```

>  key:管理可复用的元素,如果有两个完全独立的元素的话可以使用key代表唯一性,列表渲染的时候最好带上key,保证唯一性,

> v-for也可以取整数
```
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

> 数组的更新检测:
+ 变异方法:(执行后影响原数组)可以直接影响到页面更新

 
+ Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```
+ 非变异方法:(不会影响)需要重新替换原数组实现更新

> 由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：

+ Vue 不能动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, key, value)例如:
  
 ```
 var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
``` 

+ 可以添加一个新的 age 属性到嵌套的 userProfile 对象：
  
```
Vue.set(vm.userProfile, 'age', 27)
```

+ 还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名：
  
```
vm.$set(vm.userProfile, 'age', 27)
```

+ 有时你可能需要为已有对象赋予多个新属性，比如使用 Object.assign() 或 _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性

```
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

#### v-for with v-if

+ 当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中


  


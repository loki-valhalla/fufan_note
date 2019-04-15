#  vue框架

> 简介:Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。它不仅易于上手，还便于与第三方库或既有项目整合。vue是有国人尤雨溪开发的,目前是国内使用最多的框架.

+ mv-vm 框架
+ ui框架  element-ui  http://element.eleme.io/#/
+ ant-design(目前也在出vue版本)  https://ant.design/docs/react/introduce-cn
+ iview https://www.iviewui.com/docs/guide/install
+ weex(混合开发框架) https://weex.incubator.apache.org/

> vue的使用
+ 像JQ一样先引入库
+ 创建一个vue的作用域(vue能解析的代码区域)
+ 在script中声明一个vue实例对象,一般的话用vm这个变量表示实例对象

> 模板语法: {{}}
+ 在页面中{{}}可以执行解析JS单行代码,比如三元表达式,要按照JS的格式书写
   ```
  <p>{{3>2?'你好!':'滚蛋!'}}</p>
  ```
+ vue不能写进body中
  


>计算属性:如果不存在修改数据,只需要修改展示内容,可以使用计算属性对作用域数据进行"修饰",修饰完的数据,页面可以直接使用

+ 比如在页面中我们想要使用vue翻转一个字符串的话就要
  
```

  	<p>{{ message.split('').reverse().join('') }}</p>

```

+ 这样才能翻转,但是这样可读性差,并且功能有限,所以提供了一个计算属性

```

computed: {
   reversedMessage2(){
   return this.message.split('').reverse().join('');
   }
} 

```

+ 这样的话可读性和功能性都会获得提升


> 方法也可以实现计算属性的需求.两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的,而方法每调用一次都会重新执行一次.

  
-  _.clone  复制那个变量的值并赋值给一个新的变量

### class

+ 对象语法:
  
```
<p v-bind:class="clazz">不凡学院</p>

clazz: {
active:true,
'font-strong': true
},

```

+ 数组语法:


```
<p v-bind:class="[bigClass,emClass,clazz]" class="bg-blue">不凡学院</p>

bigClass:'big',
emClass: 'font-em'
clazz: {
active:true,
'font-strong': true
},
```


### style

+ 对象形式

```

    var vm = new Vue({
       el: '#app',
       data: {
          activeColor: 'red',
          fontSize: 30,
          styleObj:{
              color: 'green',
              fontSize : '30px'
              }
            },
})

<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">不凡学院</div>

<div v-bind:style="styleObj">不凡学院</div>

```

+ 数组形式

```

<div v-bind:style="[{color:'red'},{fontSize:'30px'}]">不凡学院</div>

```

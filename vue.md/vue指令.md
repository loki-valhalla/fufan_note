## JS指令

+ v-html:在页面中插入可以执行的代码
  
```
    <span v-html="html"></span>
      html:'<a href="http://www.baidu.com">百度</a>',

```



+ v-bind 把vue页面中的html的属性变为可以读取作用域的动态属性,还可以合法的写JS表达式

```

<p v-bind:title="msg">我又是一个p标签</p>
msg:'aaaaa'

```


+ v-once 只能在第一次时渲染,之后就不会响应


+ v-on  事件绑定

+ v-model 使表单和数据模型的双向数据绑定,只能应用在表单元素中
  (input(radio,text ,address,email),select checkbox , textarea)

+ v-text  会覆盖元素中原本的内容,但是插值表达式只会替换自己的这个占位符,不会把整个元素内容清空
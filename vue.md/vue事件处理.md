# 事件处理

+ 可以使用vue-on指令监听dom事件并触发JS代码

#### 事件处理方法

+ 直接把代码放进vue是不行的,所以v-on可以接受一个需要调用方法的名称

```
  <button v-on:click="greet">Greet</button>

  var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})


在 `methods` 对象中定义方法
```

> 内联处理器方法

+ 除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法

```

<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

```

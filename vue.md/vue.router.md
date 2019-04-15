# vue.router 

> 先引用vue.router的JS文件
```
<!-- 这里router-link使用来导航的 ,默认会被渲染成一个a 标签 -->
 <!-- 通过传入 `to` 属性指定链接 -->
 <router-link to="/foo">Go to Foo</router-link>
 <router-link to="/bar">Go to Bar</router-link>
```
> 路由出口
```
  <router-view></router-view>
<!-- 路由匹配的组件会渲染到这里 -->
```
> 执行use  把VueRouter挂载到Vue对象上
```
如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

Vue.use(VueRouter);
```

> 2.需要两个组件

```
      const Foo = { template: '<div>foo</div>' };
      const Bar = { template: '<div>bar</div>' };
      在组件中也可以嵌套 <router-link></router-link>,
```

> 定义路由

```

 const router = new VueRouter({
        routes: [
          { path: '/foo', component: Foo },
          { path: '/bar', component: Bar },
          {
            path: '/about',
            component: {
              template: '<div>当前是关于页面</div>'
            }
          }
        ]
      })

```

+  每个路由应该映射一个组件。 其中"component" 可以是:
- 通过 Vue.extend() 创建的组件构造器，
- 或者，只是一个组件配置对象。
- 我们晚点再讨论嵌套路由。

> 把router加载到当前的vue实例对象
```
 var vm = new Vue({
        el: '#app',
        router,
        data:{

        },

      })
```

#### 嵌套路由

+ 要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置
+ 要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
+ children 配置就是像 routes 配置一样的路由配置数组，所以可以嵌套多层路由。
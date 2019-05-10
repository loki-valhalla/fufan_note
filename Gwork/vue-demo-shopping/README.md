vuex 的基本脚手架

mutations: 用于修改state的值
actions: 异步操作,可以调用mutations 进而修改state
getter:当前的state对象中的属性 计算属性


## vuex

#### vuex的基本组成

+ state : vuex 用于保存被共享的数据,不可用被直接修改
    - $store.state.xx
+ mutations: 用于显示修改state的值
    - $store.commit('xx',n)
+ actions: 异步操作,用异步请求数据并调用mutations 进而修改state
    - $store.dispatch('xx',{n:xx})
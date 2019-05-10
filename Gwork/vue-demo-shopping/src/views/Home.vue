<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 @click="insCount">{{$store.state.count}}</h1>
    <p>{{$store.state.user.firstName+'.'+$store.state.user.lastName}}</p>
    <p>{{$store.getters.fullName}}</p>
    <p @click="changeName">{{fullName}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    insCount(){
      // 不要这样做
      // this.$store.state.count ++;
      // 应该调用相关方法
      this.$store.commit('inCount',5)
    },
    changeName(){
        this.$store.commit('changeLastName','赵四');
    }
  },
  computed: {
    fullName(){
        return this.$store.getters.fullName
    }
  }
}
</script>


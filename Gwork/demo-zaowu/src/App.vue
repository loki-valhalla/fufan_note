<template>
  <div id="app">

    <!-- <div id="nav">
      <router-link to="/about">About</router-link>
    </div> -->
   <Header-nav v-show="$route.meta.footerShow"></Header-nav>
    <router-view></router-view>
  </div>
  
</template>
<script>
import HeaderNav from '@/components/header'
export default {
  name:'app',
  components: {
      HeaderNav
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

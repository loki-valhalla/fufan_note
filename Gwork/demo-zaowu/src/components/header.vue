<template>
     <div class="header-nav">
      <router-link class="last home" to="/home">首页</router-link> 
      <router-link class="last kind" to="/kind">分类</router-link> 
      <router-link class="last find" to="/find">发现</router-link> 
      <router-link class="last main" to="/main">我的</router-link> 
    </div>
</template>
<<script>
export default {
    name:'HeaderNav'
}
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
  color: #8E8E93 ;
}
  .header-nav{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 83px;
  // border-top: 1px solid red;
  background-color: #fff;
         z-index: 888;
  .last{
      float: left;
       display: block;
       width: 25%;
       height: 100%;
       font-size: 12px;
       line-height: 120px;
       text-align: center;
       background-repeat: no-repeat;
       background-size: 30px 30px;
       background-position: center 10px;

       &.home{
         background-image: url('../assets/img/icons/home.png');
       }
       &.kind{
         background-image: url('../assets/img/icons/kind.png');
       }
       &.find{
         background-image: url('../assets/img/icons/find.png');
       }
       &.main{
         background-image: url('../assets/img/icons/main.png');
       }
       &.router-link-active{
         color: #1C4B47;
       }
       &.router-link-active.home{
         background-image: url('../assets/img/icons/home-active.png');
       }
       &.router-link-active.kind{
          background-image: url('../assets/img/icons/kind-active.png');
       }
       &.router-link-active.find{
         background-image: url('../assets/img/icons/find-active.png');
       }
       &.router-link-active.main{
         background-image: url('../assets/img/icons/main-active.png');
       }
  }
}
</style>

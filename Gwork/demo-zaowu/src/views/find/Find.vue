<template>
     <div class="find-main">
        <div class="find-box">
            <router-link to="/find/Article" class="box-title box">精选文章</router-link>
            <router-link to="/find/Recommend" class="box-title box1">好物推荐</router-link>
        </div>
         <router-view></router-view>
    </div>
</template>


<script>
export default {
    name:'home',
    data() {
        return {
            title:'发现'
        }
    },
}
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
      .find-main{
          width: 100%;
          .find-box{
              width: 100%;
              height: 44px;
              margin-bottom: 15px;
              margin-top: 44px;
              .box-title{
                  float: left;
                  display: block;
                  width: 50%;
                  height: 44px;
                  color: #999999;
                  font-size: 18px;
                  line-height: 44px;  
              }
              &.router-link-active{
                     color: #010E0D;
              }
              &.router-link-active.box{
                   color: #010E0D;
              }
              &.router-link-active.box1{
                   color: #010E0D;
              }
          }
      }
</style>

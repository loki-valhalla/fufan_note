<template>
         <div class="other-kind">
               <div class="home-bar">
                   <p class="title">商品详情</p>
                   <a @click="$router.go(-1)" class="logo" href="javascript:;"></a>
                   <a class="gouwu" href="javascript:;"></a>
                   <a class="masage" href="javascript:;"></a>
              </div>
              <div class="other-msg">
                  <router-link class="msg msg1" to="/otherkind/kindShop" >详情</router-link>
                  <router-link class="msg msg2" to="/otherkind/details" >评价</router-link>
              </div>
              <router-view></router-view>
         </div>
         
         
</template>

<script>
export default {
    name:'otherkind',
    data () {
        return {
            title:'详情'
        }
    }
}
</script>

<style lang="scss" scoped>
     a{
    text-decoration: none;
}
      .other-kind{
          width: 100%;
             .home-bar{
            position: relative;
            width: 100%;
            height: 30px;
            padding-top: 15px;

            .title {
                font-size: 20px;
                text-align: center;
                line-height: 30px;
            }

            .logo {
                position: absolute;
                left: 16.5px;
                top: 20px;
                display: block;
                width: 18px;
                height: 20px;
                background: url('../../../../assets/img/icons/back.png') no-repeat center;
            }

            .gouwu {
                position: absolute;
                right: 16px;
                top: 20px;
                display: block;
                width: 23px;
                height: 22px;
                background: url('../../../../assets/img/home/gowu.png') no-repeat center;
            }

            .masage {
                position: absolute;
                right: 61px;
                top: 20px;
                display: block;
                width: 22px;
                height: 22px;
                background: url('../../../../assets/img/fenye/other.png') no-repeat center;
            }
        }
        .other-msg{
            width: 100%;
            height: 80px;
            .msg{
               float: left;
               font-size: 17px;
               color:#999999;
               text-align: center;
               line-height: 30px;
               margin-top: 15px;
               &.msg1{
                   margin-left: 130px;
               }
               &.msg2{
                   margin-left: 52px;
               }
            }
        }
      }     
</style>

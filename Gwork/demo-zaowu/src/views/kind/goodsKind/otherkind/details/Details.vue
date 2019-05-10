<template>
      <div class="deils-box">
           <div v-for="m in image" :key="m.id" class="det-msg">
                  <div class="logo-box">
                       <img :src="m.img" alt="">
                  </div>
           </div>
          <div class="other-shop">
            <a class="shop-icon" href="javascript:;"></a>
            <a class="shop-join" href="javascript:;"></a>
            <router-link  class="shop-jump"   to="*" >加入购物车</router-link>
            <router-link  class="shop-jump1"  to="*" >立即够买</router-link>
         </div>
      </div>
</template>

<script>
export default {
    name:'kindDetails',
    data () {
        return {
            title:'评价',
            image:[
                {   id:Math.random(),
                    img:require('@/assets/img/kind/ping.png'),
                },
              
                {   id:Math.random(),
                    img:require('@/assets/img/kind/ping2.png')
                },
                {   
                    id:Math.random(),
                    img:require('@/assets/img/kind/ping3.png')
                }, 
                {   
                     id:Math.random(),
                     img:require('@/assets/img/kind/ping4.png')
                },
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
a{
    text-decoration: none;
}
      .deils-box{
          width: 100%;
          height: 700px;
          .det-msg{
               width: 100%;
               .logo-box{
                   width: 100%;
                   height: 135px;
                   margin: 0 auto;
                   margin-bottom: 17px;
               }
          }
           .other-shop{
            position:fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 82.5px;
            background-color: #fff;
            .shop-icon{
                position: absolute;
                top: 14px;
                left: 16px;
                display: block;
                width: 27px;
                height: 27px;
                background-image: url('../../../../../assets/img/icons/xin.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            .shop-join{
                position: absolute;
                top: 14px;
                left: 64px;
                display: block;
                width: 27px;
                height: 27px;
                background-image: url('../../../../../assets/img/icons/tele.png');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
            .shop-jump{
                position: absolute;
                left: 122px;
                top: 5.5px;
                display: block;
                width: 113px;
                height: 40px;
                border: 1px solid #1C4B47;
                color: #1C4B47;
                font-size: 15px;
                text-align: center;
                line-height: 40px;
            }
            .shop-jump1{
                position: absolute;
                right: 19px;
                top: 5.5px;
                display: block;
                width: 113px;
                height: 40px;
                border: 1px solid #1C4B47;
                color: #1C4B47;
                font-size: 15px;
                text-align: center;
                line-height: 40px;
            }
         }
      }
</style>

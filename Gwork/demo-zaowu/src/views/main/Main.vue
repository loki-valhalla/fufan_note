<template>
     <div class="main-home">
        <div class="main-logo">
             <a class="main-logo1" href="javascript:;"></a>
             <a class="main-logo2" href="javascript:;"></a>
             <a class="main-msg">注册</a>
             <a class="main-msg1">登录</a>
        </div>
        <div class="main-bus">
            <div class="bus-text">
                <li class="text-mas">我的订单</li>
                <li class="text-mas1">></li>
            </div>
            <div class="shouhou">
                <router-link v-for="v in image" :key="v.id" to="*" class="logo">
                    <span class="logo-icon">
                          <img :src="v.img" alt="">
                     </span>
                    <p class="logo-msg">{{v.msg}}</p>
               </router-link>
            </div>
        </div>
          <div class="main-cang">
            <div class="bus-text">
                <li class="text-mas">我的收藏</li>
                <li class="text-mas1">></li>
            </div>
            <div class="shouhou">
                <router-link v-for="v in icon" :key="v.id" to="*" class="logo">
                    <span class="logo-icon">
                          <img :src="v.img" alt="">
                     </span>
                    <p class="logo-msg">{{v.msg}}</p>
               </router-link>
            </div>
        </div>
        <div class="main-list">
           <router-link  v-for="l in produceById " :key="l.id" tag="div" to="*" class="list-lis">
                 <img class="lis-img" :src="l.img" alt="">
                 <p class="lis-msg">{{l.cname}}</p>
                 <span class="lis-logo">></span>
           </router-link>
        </div>
    </div>
</template>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
<script>
import productApi from '@/api/produce'
export default {
    name:'my-main',
    data() {
        return {
            title:'我的',
            image:[
                {
                    img:require('@/assets/img/main-find/money.png'),
                    msg:'代付款'
                },
                 {
                    img:require('@/assets/img/main-find/car.png'),
                    msg:'代收货'
                },
                 {
                    img:require('@/assets/img/main-find/done.png'),
                    msg:'已完成'
                },
                 {
                    img:require('@/assets/img/main-find/after.png'),
                    msg:'售后'
                }
            ],
            icon:[
                {
                    img:require('@/assets/img/main-find/stone.png'),
                    msg:'物品'
                },
                 {
                    img:require('@/assets/img/main-find/pinpai.png'),
                    msg:'品牌'
                },
                 {
                    img:require('@/assets/img/main-find/art.png'),
                    msg:'文章'
                },
            ],
            produceById:[]
        }
    },
    created () {
        this.getProuductListId();
    },
    methods: {
        getProuductListId(){
            productApi.getProductListByMainId()
                .then(res=>{
                    this.produceById = res;
                    // console.log(this.produceById)
                })
        }
    },
}
</script>

<style scoped lang="scss">
li{
    list-style: none;
}
a{
    text-decoration: none;
}
    .main-home{
        position: relative;
        background-color: #F5F5F5;
        .main-logo{
            position: relative;
            width: 100%;
            height: 237px;
            background: url('../../assets/img/main/bg2.png') no-repeat center;
            background-size: cover;
            .main-logo1{
                position: absolute;
                top: 55px;
                right: 24px;
                display: block;
                width: 24px;
                height: 24px;
                background: url('../../assets/img/main/shezhi.png');
                background-size: cover;
            }
            .main-logo2{
                position: absolute;
                top: 55px;
                left: 150px;
                display: block;
                width: 74px;
                height: 74px;
                background: url('../../assets/img/main/1.png');
                background-size: cover;
                border-radius: 50%;
            
            }
            .main-msg{
                position: absolute;
                top: 154.5px;
                left: 139px;
                display: block;
                width: 47px;
                height: 32.5px;
                background-color: #fff;
                border-right: 1px solid #999999;
                text-align: center;
                font-size: 14px;
                line-height: 32.5px;
            }
              .main-msg1{
                position: absolute;
                top: 154.5px;
                right: 140px;
                display: block;
                width: 47px;
                height: 32.5px;
                background-color: #fff;
                border-left: 1px solid #999999;
                text-align: center;
                font-size: 14px;
                line-height: 32.5px;
            }
        }
        .main-bus{
            position: absolute;
            top: 198px;
            left: 20px;
            width: 336px;
            height: 120px;
            margin: 0 auto;
            background-color: #fff;
            z-index: 999;
            border-radius: 10PX;
            border-bottom: 1px solid #fff;
            .bus-text{
               .text-mas{
                 height: 37.5px;
                 font: 16px;
                 color: #010E0D;
                 text-align: left;
                 border-bottom: 1px solid #E5E5E5 ;
                 line-height: 37.5px;
                 }
              .text-mas1{
                position: absolute;  
                right: 0;
                top: 0px;
                 height: 37.5px;
                 font: 16px;
                 color: #010E0D;
                 text-align: right;
                 line-height: 37.5px;
                 font-size: 30px;
               }
          }
          .shouhou{
            //   float: left;
              width: 100%;
              height: 82px;
            //   background-color: blue;
              .logo{
                  float: left;
                  display: block;
                  width: 40px;
                  height: 40px;
                  margin:20px 22px;
                  .logo-icon{
                      display: block;
                      width: 28px;
                      height: 28px;
                      margin: 0 auto;
                  }
                  .logo-msg{
                      color: #494949 ;
                      font-size: 10px;
                  }
              }
          }
        
        }
         .main-cang{
            position: absolute;
            top:320px;
            left: 20px;
            width: 336px;
            height: 120px;
            margin: 0 auto;
            background-color: #fff;
            z-index: 999;
            border-radius: 10PX;
            border-bottom: 1px solid #fff;
            .bus-text{
               .text-mas{
                 height: 37.5px;
                 font: 16px;
                 color: #010E0D;
                 text-align: left;
                 border-bottom: 1px solid #E5E5E5 ;
                 line-height: 37.5px;
                 }
              .text-mas1{
                position: absolute;  
                right: 0;
                top: 0px;
                 height: 37.5px;
                 font: 16px;
                 color: #010E0D;
                 text-align: right;
                 line-height: 37.5px;
                 font-size: 30px;
               }
          }
          .shouhou{
            //   float: left;
              width: 100%;
              height: 82px;
            //   background-color: blue;
              .logo{
                  float: left;
                  display: block;
                  width: 40px;
                  height: 40px;
                  margin:20px 35px;
                  .logo-icon{
                      display: block;
                      width: 28px;
                      height: 28px;
                      margin: 0 auto;
                  }
                  .logo-msg{
                      color: #494949 ;
                      font-size: 10px;
                  }
              }
          }
        
        }
        .main-list{
            position: absolute;
            top:450px;
            left: 0;
            width: 100%;
            height: 450px;
            // background-color: red;
            .list-lis{
                position: relative;
                 display: block;
                 width: 100%;
                 height: 66px;
                //  background-color: royalblue;
                 .lis-img{
                     position: absolute;
                     left: 15px;
                     top: 17.5px;
                 } 
                 .lis-msg{
                     text-align: left;
                     line-height: 66px;
                     margin-left: 50px;
                 }
                 .lis-logo{
                     position: absolute;
                     right: 30px;
                     top: 20px;
                     font-size: 30px;
                     color: #AEAEAE;
                 }
            }
        }
    }
</style>

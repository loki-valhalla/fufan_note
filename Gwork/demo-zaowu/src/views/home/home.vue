<template>
    <div class="home-main">
        <div class="home-bar">
            <p class="title">ZAOWU 造物</p>
            <a class="logo" href="javascript:;"></a>
            <a class="gouwu" href="javascript:;"></a>
            <a class="masage" href="javascript:;"></a>
        </div>
        <div class="swiper-section">
            <div class="swiper-nav-bar">
                <a @click="bannerImages = imags1" class="swiper-list" href="javascript:;">推荐</a>
                <a @click="bannerImages = imags2" class="swiper-list" href="javascript:;">活动</a>
                <a @click="bannerImages = imags3" class="swiper-list" href="javascript:;">品牌</a>
                <a @click="bannerImages = imags4" class="swiper-list" href="javascript:;">定制</a>
            </div>
            <swiper class="swiper-box" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="m in bannerImages" :key="m.id">
                    <img :src="m.img" alt="">
                </swiper-slide>
            </swiper>
        </div>
        <div class="trick"></div>
        <div class="live">
             <p class="live-mas">-TUE 9.18-</p>
             <p class="live-title">周二品质生活专题</p>
        </div>
        <div class="shopping">
             <div class="shop-logo"></div>
             <div class="shop-list">
                  <a v-for="l in listImages" :key="l.id" href="javascript:;" class="list-index">
                      <img :src="l.img" alt="">
                      <p class="list-mas">{{l.title}}</p>
                      <p class="list-money">{{l.money}}</p>
                  </a>
             </div>
        </div>
          <div class="live">
             <p class="live-mas">-MON 9.17-</p>
             <p class="live-title">周一新品抢鲜放送</p>
        </div>
        <div class="over">
              <div v-for="pic in overImages" :key="pic.id" class="over-box">
                <img :src="pic.img" alt="">
              </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'

    export default {
        name: 'home',
        data() {
            return {
                title: '主页',
                bannerImages:[
                  
                ],
                images:[
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m1.png')
                    },
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m2.png')
                    },
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m3.png')
                    },  
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m3.png')
                    },    
                ],
                imags1:[
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m1.png')
                    },
                ],
                imags2:[
                        {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m2.png')
                    },
                ],
                imags3:[
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m3.png')
                    },   
                ],
                imags4:[
                      {
                          id:Math.random(),
                          url:'',
                          img:require('@/assets/img/home/m3.png')
                    },   
                ],
                // list-index图片.文字,钱
                listImages:[
                       {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/t1.png'),
                        title:'精油香氛',
                        money:'¥344'
                       },
                        {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/t2.png'),
                         title:'山居猎奇',
                         money:'¥344'
                       },
                        {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/t3.png'),
                         title:'北欧国度',
                         money:'¥372'
                       },
                        {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/t4.png'),
                        title:'卡洛卡陶瓷碗盘',
                        money:'¥388'
                       }
                ],
                overImages:[
                    {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture1.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture2.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture3.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture4.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture5.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture6.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture7.png')
                    },
                     {
                        id:Math.random(),
                        url:'',
                        img:require('@/assets/img/home/picture8.png')
                    },
                ],
                swiperOption: {
                     slidesPerView: 1.2,
                     centeredSlides:true,
                     loop:true
               }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created () {
            //初始化bannerImages
            this.bannerImages = this.images;
        },
        methods: {
            callback(){

            }
        }
    }
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
    .home-main {
        height: 1230px;
        .home-bar {
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
                background: url('../../assets/img/home/search.png') no-repeat center;
            }

            .gouwu {
                position: absolute;
                right: 16px;
                top: 20px;
                display: block;
                width: 23px;
                height: 22px;
                background: url('../../assets/img/home/gowu.png') no-repeat center;
            }

            .masage {
                position: absolute;
                right: 61px;
                top: 20px;
                display: block;
                width: 22px;
                height: 22px;
                background: url('../../assets/img/home/masage.png') no-repeat center;
            }
        }
        .swiper-section{
            width: 100%;
            .swiper-nav-bar{
                text-align: center;
                margin:20px auto;
                .swiper-list{
                    display: inline-block;
                    padding: 0 20px;
                    color: #010E0D ;
                    border-right: 1px solid #E5E5E5;
                    &:last-child{
                        border-right: none;
                    }
                }
            }
            .swiper-box{
                width: 100%;
                height: 390px;
            }

        }
        .trick{
            width: 100%;
            height: 5px;
            background-color: #F9F9F9;
        }
        .live{
            width: 100%;
            height: 70px;
            .live-mas{
                font-size: 20px;
                color: #010E0D;
                line-height: 47px;
            }
            .live-title{
                font-size: 12px;
                color: #494949;
            }
        }
        .shopping{
            width: 100%;
            .shop-logo{
                width: 341px;
                height: 202px;
                margin: 0 auto; 
                background: url('../../assets/img/home/bg1.png') no-repeat center;
            }
            .shop-list{
                margin: 0 auto;
                width: 100%;
                height: 125px;
                .list-index{
                    float: left;
                    margin-left: 5px;
                    display: block;
                    width: 85px;
                    height: 79px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    margin-left: 8px;
                    
                }
                .list-mas{
                    height: 15px;
                    font-size: 10px;
                    color: #494949;
                    line-height: 15px;
                    text-align: center;
                }
                .list-money{
                    font-size: 10px;
                    color: #575757;
                     line-height: 15px;
                     text-align: center;
                }
            }
        }
        .over{
            width: 100%;
            height: 180px;
            margin: 0 auto;
            .over-box{
                float: left;
                width: 79px;
                height: 79px;
                border-radius: 5px;
                background-color: #E5E5E5;
                margin-left: 12px;
                margin-top: 10px;
            }
        }
    }
</style>
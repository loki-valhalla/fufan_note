<template>
     <div class="kind-main">
        <div class="home-bar">
            <p class="title">内衣</p>
            <a @click="$router.go(-1)" class="logo" href="javascript:;"></a>
            <a class="gouwu" href="javascript:;"></a>
            <a class="masage" href="javascript:;"></a>
            <!-- <p>{{$route.params.id}}</p> -->
        </div>
        <div class="kind-list">
            <a class="kind-index" href="javascript:;">新品</a>
            <a class="kind-index" href="javascript:;">销量</a>
            <a class="kind-index" href="javascript:;">价格</a>
            <a class="kind-index xuan" href="javascript:;">筛选</a>
        </div>
        <div class="kind-louter">
              <span v-for="v in msg" :key="v.id" class="louter-index">
                  <a class="index-list" href="javascript:;">{{v.title}}</a>
                </span>
        </div>
        <router-link :to="{name:'otherkind',params:{id:g.id}}" tag="div" :other='g' v-for="g in prodectList" :key="g.id" class="neiyi" >
              <span  class="nei-index">
                  <a href="#"><img :src="g.img" alt=""></a>
                  <p class="index-msg">{{g.cname}}</p>
                  <p class="index-msg1">{{g.ename}}</p>
                  <p class="index-msg2">{{g.price}}</p>
              </span>
        </router-link>
        <!-- <div class="neiyi">
              
        </div> -->
    </div>
</template>


<script>
import productApi from '@/api/produce'
export default {
    name:'goodKind',
    data() {
        return {
            msg:[
                {
                    id:Math.random(),
                    title:'无痕'
                },
                {
                    id:Math.random(),
                    title:'美背'
                },
                {
                    id:Math.random(),
                    title:'运动'
                },
                {
                    id:Math.random(),
                    title:'性感'
                },
            ],
             msg1:[
                {
                    id:Math.random(),
                    url:'',
                    img:require('@/assets/img/fenye/detail1.png'),
                    msg:'NEIWAI',
                    msg1:'Cozy女士家居服莫代尔',
                    msg2:'¥399'
                },
                {
                    id:Math.random(),
                     url:'',
                    img:require('@/assets/img/fenye/detail2.png'),
                    msg:'TRIUMPU',
                    msg1:'文胸内裤套装',
                    msg2:'¥299'
                },
                {
                    id:Math.random(),
                     url:'',
                    img:require('@/assets/img/fenye/detail3.png'),
                    msg:'ESSENCE',
                    msg1:'女士Cozy圆领吊带性感',
                    msg2:'¥219'
                },
                {
                    id:Math.random(),
                     url:'',
                    img:require('@/assets/img/fenye/detail4.png'),
                    msg:'LAPERLA',
                    msg1:'女士Bra-top蕾丝美背无',
                    msg2:'¥159'
                },
                  {
                    id:Math.random(),
                     url:'',
                    img:require('@/assets/img/fenye/detail5.png'),
                    msg:'CRYSTALS',
                    msg1:'零敏洛丽无钢圈内衣',
                    msg2:'¥209'
                },
                  {
                    id:Math.random(),
                     url:'',
                    img:require('@/assets/img/fenye/detail6.png'),
                    msg:'JUDYHUA',
                    msg1:'女士高端网纱交叠无钢',
                    msg2:'¥399'
                },
            ],
            prodectList:[]
        }
    },
    created(){
        this.getProductList();
    },
    methods: {
        getProductList(){
            productApi.getProductListByKindId(this.$route.params.id)
                    .then(res=>{
                        this.prodectList = res;
                        console.log(this.prodectList)
                    })
        }
    },
}
</script>
<style scoped lang="scss">
a{
    text-decoration: none;
}
      .kind-main{
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
                background: url('../../../assets/img/icons/back.png') no-repeat center;
            }

            .gouwu {
                position: absolute;
                right: 16px;
                top: 20px;
                display: block;
                width: 23px;
                height: 22px;
                background: url('../../../assets/img/home/gowu.png') no-repeat center;
            }

            .masage {
                position: absolute;
                right: 61px;
                top: 20px;
                display: block;
                width: 22px;
                height: 22px;
                background: url('../../../assets/img/home/masage.png') no-repeat center;
            }
        }
        .kind-list{
            width: 100%;
            height: 44px;
            background-color: #F9F9F9;
               box-sizing: border-box;
               margin-top: 10px;
            .kind-index{
                font-size: 14px;
                color: #010E0D;
                line-height: 44px;
                margin-right: 65px;
                text-align: left;
                &.xuan{
                   margin-right: 0;
                }
            }
        }
        .kind-louter{
            width: 100%;
            background-color: red;
            .louter-index{
                float: left;
                margin-left: 36px;
                margin-top: 18px;
               .index-list{
                display: block;
                width: 51px;
                height: 23px;
                background-color: #F9F9F9;
                font-size: 14px;
                color: #010E0D;
                text-align: center;
                line-height: 23px;
               }
            }
        }
        .neiyi{
            width: 100%;
            // height: 600px;
            .nei-index{
                   float: left;
                   margin-left: 36px;
                   margin-top: 40px;
                   display: block;
                   width: 129px;
                   height: 129px;
                   .index-msg{
                       color: #494949 ;
                       font-size: 12px;
                   }
            }
        }
    }
</style>

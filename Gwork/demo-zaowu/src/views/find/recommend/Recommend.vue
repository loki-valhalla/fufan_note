<template>
     <div class="recommend-main">
          <div v-for="m in images" :key="m.id" class="good-thing">
               <img :src="m.img" alt="" class="good-img">
               <div class="recommend-box">
                   <span class="good-msg list">{{m.title}}</span>
                   <span class="good-msg list1">{{m.title2}}</span>
               </div>
               <p class="good-title">{{m.title3}}</p>
              
          </div>
    </div>
</template>
<script>
export default {
    name:'Recommend',
    data() {
        return {
            images:[
                {
                    img:require('@/assets/img/find/good1.png'),
                    title:'NEIWAI2019秋冬',
                    title2:'针织新品优惠',
                    title3:'和Jennifer领略NEIWAI，感受自潮不熄'
                },
                     {
                    img:require('@/assets/img/find/good2.png'),
                    title:'Paola Paronetto',
                    title2:'手作摆件艺术',
                    title3:'这个开启丹麦设计新时代的品牌值得Pick'
                },
                     {
                    img:require('@/assets/img/find/good3.png'),
                    msg:'NEIWAI2019秋冬',
                    title:'NEIWAI2019秋冬',
                    title2:'针织新品优惠',
                    title3:'和Jennifer领略NEIWAI，感受自潮不熄'
                },
            ]
        }
    },
}
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
    .recommend-main{
        .good-thing{
            height: 224px;
            .good-img{
                height: 160px;
            }
            .recommend-box{
                height: 35px;
                 .good-msg{
                float: left;
                display: block;
                width: 132px;
                height: 22px;
                font-size: 16px;
                color: #010E0D;
                text-align: center;
                border-right: 1px solid #000;
                line-height: 22px;
                margin-top: 10px;
                margin-left: 60px;
               &.list1{
                   border-right: none;
                   margin-left: -10px;
               }
            }
            .good-title{
                color: #494949;
                font-size: 12px;
            }
          }
          
        }
    }
</style>

<template>
    <div class="kind-item">
          
         <div @click="changeShow(goods.id)" class="pkind-block" :style="{backgroundImage:'url('+goods.img+')'}">
             <p class="title">{{goods.title}}</p> 
                <p class="ctitle">{{goods.ctitle}}</p> 
        </div>
                
     <ul v-show="showItem == goods.id" class="sub-kind">
         <router-link :to="{name:'goodKind',params:{id:sub.id}}" tag="li" class="sub-list" v-for="sub in goods.KindGoodsList"   :key="sub.id" >
               <span class="cname">{{sub.ctitle}}</span>
         </router-link>
     </ul>
    </div>
</template>

<script>
export default {
    name:'kindname',
    props:{
        goods:Object,
        showItem:String
    },
    data() {
        return {
             
        }
    },
    methods: {
        changeShow(id){
            // 通知父类,修改样式
            // 如果父类showItem = id 当前样式显示
            this.$emit('change-show',id)
        }
    },
}
</script>

<style lang="scss" scoped>
           .kind-item{
              width: 100%;
              .pkind-block{
                 width: 100%;
                 padding: 0 20px;
                 background-color: #F4F4F4;
                 height: 120px;
                 margin: 10px auto;
                 box-sizing: border-box;
                 background-repeat: no-repeat;
                 background-position: 80%;
                    .title{
                       font-size: 20px;
                       color: #010E0D;
                       text-align: left;
                       line-height: 100px;
                       margin-left: 68.5px;
                   }
                    .ctitle{
                      font-size: 14px;
                      color: #ACA7A9;
                      text-align: left;
                      margin-left: 85px;
                      margin-top: -32px;
                    }
        }
          .sub-kind{
              width: 100%; 
             .sub-list{
               width: 100%;
               height: 22px;
               font-size: 16px;
               color: #494949;
               line-height: 22px;
               border-bottom: 1px solid #f5f5f5 ;
               text-align: left;
           }
        }          
    }  
</style>



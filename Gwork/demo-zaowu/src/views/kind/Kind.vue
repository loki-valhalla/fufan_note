<template>
     <div class="kind-main">
       <div class="home-bar">
            <p class="title">ZAOWU 造物</p>
            <a @click="$router.go(-1)" class="logo" href="javascript:;"></a>
            <a class="gouwu" href="javascript:;"></a>
            <a class="masage" href="javascript:;"></a>
        </div>
         <div class="list">
               <kind-item @change-show="handleChangeShow" v-for="g in goodKindsList" :key="g.id"  :goods="g"  :showItem = "showItem"></kind-item>
         </div>
         <!-- 自路由渲染当前路由 -->
         <!-- <router-link ></router-link> -->
    </div>
</template>


<script>

// import kindapi from '@/api/kindapi'
import kindapi from '@/api/kindapi.js'
import kindItem from './components/kinditem'
export default {
    name:'home',
    components: {
        kindItem
    },
    data() {
        return {
            title:'我的',
            goodKindsList:[],
            // 激活样式
            showItem:''
        }
    },
    created(){
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            // this.goodKindsList = kindapi.getKindList();  
            kindapi.getKindList()
                .then(res=>{
                    this.goodKindsList = res
                })
            
        },
        handleChangeShow(id){
            console.log(id)
           if(this.showItem == id){
               this.showItem = ''
           }else{
                this.showItem = id;
           }
        }
    }
}
</script>

<style scoped lang="scss">
    .kind-main{
        height: 100%;
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
                background: url('../../assets/img/icons/back.png') no-repeat center;
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
        .list{
             width: 100%;
       }
    }
</style>

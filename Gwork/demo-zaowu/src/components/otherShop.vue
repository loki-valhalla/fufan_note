<template>
     <div class="other-main">
       
        <div class="other-title">
            <p class="title-msg">NEIWAI</p>
            <p class="title-msg1">Cozy女士家居系列</p>
            <span class="title-block">舒适居家 </span>
            <span class="title-block">安心睡眠 </span>
            <span class="title-block1"></span>
            <ul class="tit-index">
                <li class="title-index">7PM至7AM</li>
                <li class="title-index"> 一次下厨 一部沙发电影 </li>
                <li class="title-index">一个赖床3分钟的清晨 </li>
                <li class="title-index">不必紧绷神经  不用束缚身体  </li>
            </ul>
        </div>
        <div  class="other-img">
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
    name:'otherShop',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
   .other-main{
         width: 100%;
     
        .other-title{
            width: 100%;
            height: 270px;
            margin-top: 15px;
            .title-msg{
                color: #010E0D;
                font-size: 20px;
                text-align: center;
                line-height: 60px;
            }
            .title-msg1{
                font-size: 16px;
                color: #010E0D ;
                text-align: center;
            }
            .title-block{
                font-size: 10px;
                color: #494949;
                line-height: 55px;
                //  letter-spacing 添加文字之间间距
                letter-spacing:5px
            }
            .title-block1{
                display: block;
                width: 108px;
                height: 2px;
                background-color: #999999;
                margin-left: 133px;
            }
            .tit-index{
                margin-top:25px;
                .title-index{
                    font-size: 10px;
                    color: #494949;
                    line-height: 28px;
                }
            }
        }
        .other-img{
            width: 339px;
            height: 354px;
            margin: 0 auto;
            background-image: url('../assets/img/fenlei2/detail3.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
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
                background-image: url('../assets/img/icons/xin.png');
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
                background-image: url('../assets/img/icons/tele.png');
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



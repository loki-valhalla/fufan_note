<template>
     <div class="find-main">
        <div class="find-icon">
             <div class="icon-box">
                 <span class="box-msg"> 一起来观看 Wes Anderson<br>的色彩回旋舞</span>  
                <ul class="box-block">
                    <li class="block-msg">对称</li>
                    <li class="block-msg">色彩</li>
                    <li class="block-msg">构图</li>
                </ul>
                <div class="box-image"></div>
             </div>
              <div class="icon-box1">
                 <span class="box-msg"> 一起来观看 Wes Anderson<br>的色彩回旋舞</span>  
                <ul class="box-block">
                    <li class="block-msg">对称</li>
                    <li class="block-msg">色彩</li>
                    <li class="block-msg">构图</li>
                </ul>
             </div>
               <div class="icon-box2">
                 <span class="box-msg"> 一起来观看 Wes Anderson<br>的色彩回旋舞</span>  
                <ul class="box-block">
                    <li class="block-msg">对称</li>
                    <li class="block-msg">色彩</li>
                    <li class="block-msg">构图</li>
                </ul>
             </div>
               <div class="icon-box3">
                 <span class="box-msg"> 一起来观看 Wes Anderson<br>的色彩回旋舞</span>  
                <ul class="box-block">
                    <li class="block-msg">对称</li>
                    <li class="block-msg">色彩</li>
                    <li class="block-msg">构图</li>
                </ul>
             </div>
               <div class="icon-box4">
                 <span class="box-msg"> 一起来观看 Wes Anderson<br>的色彩回旋舞</span>  
                <ul class="box-block">
                    <li class="block-msg">对称</li>
                    <li class="block-msg">色彩</li>
                    <li class="block-msg">构图</li>
                </ul>
             </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'Article',
    data() {
        return {
            title:'文章'
        }
    },
}
</script>

<style scoped lang="scss">
a{
    text-decoration: none;
}
 .find-main{
     .find-icon{
         position: relative;
         width: 100%;
         height: 723px;
         background-color: #1C4B47;
         .icon-box{
             position: absolute;
             bottom: 75px;
             left: 7.5px;
              width: 359px;
              height: 500px;
              background-color: #fff;
              margin:  0 auto;
              border-radius: 10px;
              z-index: 99;
              .box-msg{
                  position: absolute;
                  left: 70.5px;
                  top: 20px;
                  display: block;
                  width: 220px;
                  height: 50px;
                  font-size: 18px;
                  color: #010E0D ;
                  line-height: 30px;
              }
            .box-block{
             position: absolute;
             top: 81px;
             left: 140px;
             display: block;
             width: 88px;
             height: 17px;
             .block-msg{
                 float: left;
                 font-size: 12px;
                 color: #999999;
                 letter-spacing:2px;
                 &:nth-child(2){
                     border-right: 1px solid #999999;
                     border-left: 1px solid #999999;
                 }
             }
              }
            .box-image{
             position: absolute;
             bottom: 0;
             left: 50px;
             width: 265px;
             height: 358px;
             margin: 0 auto;
             background-image: url('../../../assets/img/find/1.png');
             background-repeat:  no-repeat;
             background-position: center;
              }
       } 
        .icon-box1{
             position: absolute;
             bottom:230px;
             left: 18.5px;
              width: 338px;
              height: 409px;
              background-color: #fff;
              margin:  0 auto;
              border-radius: 10px;
              z-index: 95;
              .box-msg{
                  position: absolute;
                  left: 60px;
                  top: 20px;
                  display: block;
                  width: 220px;
                  height: 50px;
                  font-size: 18px;
                  color: #010E0D ;
                  line-height: 30px;
              }
            .box-block{
             position: absolute;
             top: 81px;
             left: 130px;
             display: block;
             width: 88px;
             height: 17px;
             .block-msg{
                 float: left;
                 font-size: 12px;
                 color: #999999;
                 letter-spacing:2px;
                 &:nth-child(2){
                     border-right: 1px solid #999999;
                     border-left: 1px solid #999999;
                 }
             }
              }

       } 
        .icon-box2{
             position: absolute;
             bottom:205px;
             left:30px;
              width: 314px;
              height: 473px;
              background-color: #fff;
              margin:  0 auto;
              border-radius: 10px;
              z-index: 85;
              .box-msg{
                  position: absolute;
                  left: 50px;
                  top: 20px;
                  display: block;
                  width: 220px;
                  height: 50px;
                  font-size: 18px;
                  color: #010E0D ;
                  line-height: 30px;
              }
            .box-block{
             position: absolute;
             top: 81px;
             left: 130px;
             display: block;
             width: 88px;
             height: 17px;
             .block-msg{
                 float: left;
                 font-size: 12px;
                 color: #999999;
                 letter-spacing:2px;
                 &:nth-child(2){
                     border-right: 1px solid #999999;
                     border-left: 1px solid #999999;
                 }
             }
              }

       } 
         .icon-box3{
             position: absolute;
             top:10px;
             left:38px;
              width: 299px;
              height: 461px;
              background-color: #fff;
              margin:  0 auto;
              border-radius: 10px;
              z-index: 75;
              .box-msg{
                  position: absolute;
                  left: 30px;
                  top: 20px;
                  display: block;
                  width: 220px;
                  height: 50px;
                  font-size: 18px;
                  color: #010E0D ;
                  line-height: 35px;
              }
            .box-block{
             position: absolute;
             top: 81px;
             left: 130px;
             display: block;
             width: 88px;
             height: 17px;
             .block-msg{
                 float: left;
                 font-size: 12px;
                 color: #999999;
                 letter-spacing:2px;
                 &:nth-child(2){
                     border-right: 1px solid #999999;
                     border-left: 1px solid #999999;
                 }
             }
              }

       } 
           .icon-box4{
             position: absolute;
             top: 0px;
             left:47px;
              width: 280px;
              height: 461px;
              background-color: #fff;
              margin:  0 auto;
              border-radius: 10px;
              z-index: 70;
              .box-msg{
                  position: absolute;
                  left: 30px;
                  top: 10px;
                  display: block;
                  width: 220px;
                  height: 50px;
                  font-size: 18px;
                  color: #010E0D ;
                  line-height: 50px;
              }
            .box-block{
             position: absolute;
             top: 81px;
             left: 130px;
             display: block;
             width: 88px;
             height: 17px;
             .block-msg{
                 float: left;
                 font-size: 12px;
                 color: #999999;
                 letter-spacing:2px;
                 &:nth-child(2){
                     border-right: 1px solid #999999;
                     border-left: 1px solid #999999;
                 }
             }
              }

       } 
    }    
 }
</style>

var lis = document.querySelectorAll('.ban-de .ban-ul');
// console.log(lis);
var liw = $('.banner-out li a');
// console.log(liw);

// 判断是否存在着个class:  element.className.indexOf('rgb196') !== -1
all();
function all() {
    // 循环Li的个数
    for(var i = 0; i<liw.length;i++){
    //  为每个li绑定索引值
        liw[i].index = i;

        liw[i].onclick = function () {
            // 循环应该出现的ul
            console.log(this.index);
            for(var j = 0; j < lis.length;j++){
               lis[j].className = "ban-ul";
            }
            lis[this.index].className = "ban-ul show";
        }
    }
}


var ule = $('.household .picture');
//  console.log(ule);
var list = document.querySelectorAll('.b-total .total-line');
// console.log(list); 

end();

function end() {
    for(var i =0;i<ule.length;i++){
        ule[i].index = i;
        ule[i].onclick = function () {
        // console.log(this.index);
        for(var j = 0 ; j < list.length ; j ++){
            list[j].className = "total-line";
        }  
           list[this.index].className = 'total-line show';
      }
   }
}

// 标签栏开关
// 定义全局属性falg,判断falg的值,为true 开启, 反之
var flag = true;
$('.list').on('click',function () {
    if(flag){
        $(".mobile").css('display','block');
        flag = false;
    }else{
        $(".mobile").css('display', 'none');
         flag = true;
    }
})













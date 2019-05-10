import Mock from 'mockjs'

const Random = Mock.Random

// 获取分页列表,包括子分类

// function getKinde() {
//     var promise =  new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//         }, 500);
//     });
// }

function getKindList() {
 var promise = new Promise((resolve, reject) => {
      var kindList = []
      for (var i = 0; i < 5; i++) {
          var goodsKind = {
              id: Random.guid(),
              title: Random.title(1),
              ctitle: Random.ctitle(2),
              img: Random.image('70x70', Random.color()),
              KindGoodsList: []
          }
          for (var j = 0; j < 6; j++) {
              var goodsList = {
                  //  父类id
                  pId: goodsKind.id,
                  id: Random.guid(),
                  ctitle: Random.ctitle(2)
              }
              goodsKind.KindGoodsList.push(goodsList)
          }
          kindList.push(goodsKind)
      }
     setTimeout(() => {
        //  500毫秒之后 改变状态 调用成功
         resolve(kindList)
     }, 500);
 })
     return promise
}

export default {
    getKindList
}

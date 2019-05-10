// var Mock = require('mockjs')
// 借助mock帮我们生成随机数 所以需要先引入mock模块
import Mock from 'mockjs'
//这是mock的随机对象 可以随机生成 guid,date,ctitle,titie,worlds,...img....url...
const Random = Mock.Random
/**
 * 获取商品信息列表  应该是通过axios获取 的 这里模拟一下
 */
function getProductList() {
    // var product = {
    //     id: 'adsfsdf',
    //     img: 'https:///',
    //     cname: '裤子',
    //     name: 'kuzi',
    //     price: 200,
    //     count: 20 //库存
    // }

    var productList = [];
    for (var i = 0; i < 10; i++) {
        var product = {
            id: Random.guid(),
            img: Random.image('200x100', Random.color()),
            cname: Random.ctitle(5),
            name: Random.title(),
            price: Random.integer(100, 600),
            count: Random.integer(3, 20)
        }
        productList.push(product)
    }

    return productList;

}

/**
 * 根据分类id 获取 商品信息列表
 **/
function getProductListByKindId(id) {
    var res = [];
    for (var i = 0; i < 6; i++) {
        res.push({
            id: Random.guid(),
            cname: Random.ctitle(1),
            ename: Random.title(1),
            img: Random.image('120x120', Random.color()),
            price: Random.integer(100, 300)
        })
    }
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 300)
    })
    return promise;

}
/**
 * 根据商品id获取商品详情
 **/
function getProductDetailById(id) {
    //虚拟构建  实际应该是后台根据id 获取当前对象明细 组装并返回
    var goods = {
        id: id,
        cname: Random.ctitle(1),
        ename: Random.title(1),
        img: Random.image('200x200', Random.color()),
        des: Random.cparagraph(2),
        price: Random.integer(100, 500)
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(goods);
        }, 300)
    })
}

// 我的页面下的内容
function getProductListByMainId(id) {
    var res = [];
    for (var i = 0; i < 5; i++) {
        res.push({
            id: Random.guid(),
            cname: Random.ctitle(10),
            ename: Random.title(2),
            img: Random.image('22x22', Random.color()),
            price: Random.integer(100, 300)
        })
    }
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 300)
    })
    return promise;

}



export default {
    getProductList,
    getProductListByKindId,
    getProductDetailById,
    getProductListByMainId
}
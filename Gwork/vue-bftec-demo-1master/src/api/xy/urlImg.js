import request from '@/api/request'

// url列表
function newsClass(data) {
    return request({
        url: '/admin/xy/news/list',
        method: 'get',
        data
    })
}
// 保存
function saveClass(data) {
    return request({
        url: '/admin/xy/news/save',
        method: 'post',
        data
    })
}
// 更新
function upClass(data) {
    return request({
        url: '/admin/xy/news/update',
        method: 'post',
        data
    })
}
// 详情
function detClass(data) {
    return request({
        url: '/admin/xy/news/detail',
        method: 'get',
        data
    })
}

//删除
function delClass(data) {
    return request({
        url: '/admin/xy/news/del',
        method: 'get',
        data
    })
}





export default {
    newsClass,
    saveClass,
    upClass,
    delClass,
    detClass
}
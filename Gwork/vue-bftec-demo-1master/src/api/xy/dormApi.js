import request from '@/api/request'

//执行登录
function getDormList(data){
  return request ({
    url: '/admin/xy/dorm/list',
    method:'get',
    data
  })
}

function saveDormList(data) {
  return request({
    url: '/admin/xy/dorm/save',
    method: 'post',
    data
  })
}

function getDormListUp(data) {
  return request({
    url: '/admin/xy/dorm/update',
    method: 'post',
    data
  })
}

function getDormListDeta(data) {
  return request({
    url: '/admin/xy/dorm/detail',
    method: 'get',
    data
  })
}

function delDormListDeta(data) {
  return request({
    url: '/admin/xy/dorm/del',
    method: 'get',
    data
  })
}

export default {
  getDormList,
  saveDormList,
  getDormListUp,
  getDormListDeta,
  delDormListDeta

}
import request from '@/api/request'

//执行登录
function getClassList(data){
  return request ({
    url: '/admin/xy/clazz/list',
    method:'get',
    data
  })
}

function saveClassList(data) {
  return request({
    url: '/admin/xy/clazz/save',
    method: 'post',
    data
  })
}

function upClassList(data) {
  return request({
    url: '/admin/xy/clazz/update',
    method: 'post',
    data
  })
}

function detaClassList(data) {
  return request({
    url: '/admin/xy/clazz/detail',
    method: 'get',
    data
  })
}

function delClassList(data) {
  return request({
    url: '/admin/xy/clazz/del',
    method: 'get',
    data
  })
}

export default {
  getClassList,
  saveClassList,
  upClassList,
  detaClassList,
  delClassList
}
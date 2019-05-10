import request from '@/api/request'

//执行登录
function getStudentList(data) {
  return request({
    url: '/admin/xy/student/list',
    method: 'get',
    data
  })
}
/**
 * 根据id 获取明细
 * @param {*} data   
 */
function getStudentDetail(data) {
  return request({
    url: '/admin/xy/student/detail',
    method: 'get',
    data
  })
}
/**
 * 修改学员信息
 * @param {*} data 
 */
function updateStudent(data) {
  return request({
    url: '/admin/xy/student/update',
    method: 'post',
    data
  })
}

function saveStudent(data) {
  return request({
    url: '/admin/xy/student/save',
    method: 'post',
    data
  })
}

export default {
  getStudentList,
  getStudentDetail,
  updateStudent,
  saveStudent
}
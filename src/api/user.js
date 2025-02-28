import request from '@/utils/request'

export function login(user) {
  return request({
    url: `/User/login?username=${user.username}&password=${user.password}`, // 将 username 和 password 作为查询参数传递
    method: 'get',
    params: { user }
  })
}

export function select() {
  return request({
    url: '/User/select',
    method: 'get'
  })
}

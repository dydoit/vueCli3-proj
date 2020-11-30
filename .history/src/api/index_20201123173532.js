import request from '@/utils/request'
export function getUser() {
    return request({
        url:'/user',
        method: 'get'
    })
}
export function getOptionsData(){
    return request({
        url:'/user',
        method: 'get'
    })
}
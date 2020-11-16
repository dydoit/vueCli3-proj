import axios from 'axios'
const service = axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000
})
// 请求拦截
// 响应拦截
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        return Promise.reject(error);
    }
)
export default service
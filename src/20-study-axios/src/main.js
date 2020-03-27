import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//1.axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then((res) => {
//   console.log(res);
// });

//2.axios发送并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
// ]).then((results) => {
//   console.log(results);
// });
//分离返回结果(使用axios的spread方法)
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }));

//3.设置全局默认配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/multidata'
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }));

//4.创建axios实例,满足分布式系统的要求
// const axiosInstance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000'
// });
// axiosInstance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// });

//5.封装axios api,见./api/
// import {test} from './api/test'
//
// test({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res);
// });

//6.axios的拦截器:包含请求拦截器和响应拦截器
//请求拦截器：第一个函数是请求成功调用的,第二个函数是请求失败调用的
axios.interceptors.request.use(config => {

  //一定要返回,否则请求无法继续往下走
  return config;
}, error => {

});

//响应拦截器：第一个函数是响应成功调用的,第二个函数是响应失败调用的
axios.interceptors.response.use(data => {

  //一定要返回,否则响应无法继续往下走,请求无法获取响应结果
  return data;
}, error => {

});
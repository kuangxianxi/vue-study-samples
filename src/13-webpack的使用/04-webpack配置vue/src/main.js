import * as mathUtils from './js/mathUtils'

console.log(mathUtils.addition(1, 2));
console.log(mathUtils.multiplication(2, 3));

//引入css文件
import './css/normal.css';

//引入vue
import Vue from 'vue'
// import App from './vue/app'
//引入 .vue文件 需要安装vue-loader和vue-template-compiler
import App from './vue/App.vue'

new Vue({
  el: '#app',
  //template会在编译后直接替换el关联的元素
  template: '<App/>',
  components: {
    App
  }
});
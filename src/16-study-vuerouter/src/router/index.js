import VueRouter from 'vue-router';
import Vue from 'vue';
// import Home from "../views/Home";
// import About from "../views/About";
// import User from "../views/User";

//使用路由懒加载
//在未使用懒加载的时候,会把所有的业务代码打包到一个js文件,当业务量大的时候,用户访问网页,会出现加载慢的情况,所以使用
//懒加载的方式,打包的时候就会使一个组件打包成一个js文件.这样用户访问网页只会访问当前所展示的组件,不会加载其他组件的
//js文件,访问速度就会变快
const Home = () => import('../views/Home');
const About = () => import('../views/About');
const User = () => import('../views/User');

//1.安装vue-router插件
Vue.use(VueRouter);

//2.创建url和组件之间的映射关系
const routes = [
    //设置默认路径
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
];
//3.创建vueRouter实例
const router = new VueRouter({
  routes,
  //配置成html5的history模式,取代hash模式
  mode: 'history',
  linkActiveClass: 'active'
});

//4.导出
export default router;


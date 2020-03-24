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
const HomeNews = () => import('../views/HomeNews');
const HomeMessages = () => import('../views/HomeMessages');
const Profile = () => import('../views/Profile');

//1.安装vue-router插件
Vue.use(VueRouter);

//2.创建url和组件之间的映射关系
const routes = [
    //设置默认路径
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    //设置嵌套路由,注意children中的路径前不需要加 /
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'messages',
        component:HomeMessages
      }
    ],
    //绑定一些数据
    meta: {
      title: '首页'
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      //...
      next();
    }
  },
  {
    path: '/about',
    component: About,
    //绑定一些数据
    meta: {
      title: '关于'
    }
  },
  {
    //动态路由
    path: '/user/:userId',
    component: User,
    //绑定一些数据
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    //绑定一些数据
    meta: {
      title: '档案'
    }

  }
];
//3.创建vueRouter实例
const router = new VueRouter({
  routes,
  //配置成html5的history模式,取代hash模式
  mode: 'history',
  linkActiveClass: 'active'
});

//全局导航守卫:如果想在路由跳转的时候进行一些操作即可使用导航守卫.如:在跳转的时候更改页面title
router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = to.matched[0].meta.title;
  next();//必须调用这个函数否则,路由不会跳转
});
router.afterEach((to, from) => {
  //也可以使用后置,进行上面的操作,此时不需要调用next()
})
//以上是全局守卫,导航守卫还包括路由独享守卫和组件内守卫
//路由独享守卫: 见router/index.js
//组件内守卫: 见Home.vue

//4.导出
export default router;


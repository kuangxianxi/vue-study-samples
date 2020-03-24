<template>
  <div id="app">
    <!--router-link的属性-->
    <!--1.router-link默认被渲染成a标签,如果想渲染成其他类型的标签,可以使用tag属性-->
    <!--
    <router-link to="/home" tag="button" replace active-class="active">Home</router-link>
    <router-link to="/about" tag="button" replace active-class="active">About</router-link>-->

    <!--    <router-link to="/home" replace>Home</router-link>-->
    <!--    <router-link to="/about" replace >About</router-link>-->
    <!--2.router-link默认使用history.pushState的方式跳转页面,如果想使用replaceState的方式
    则可以添加一个replace的属性
    pushState相当于一个栈结构,可以前进和后退,但是replaceState是直接替换,无法前进和后退
    -->

    <!--3.router-link选中的标签会默认添加两个class的值:
    router-link-exact-active:
    router-link-active: 可以通过这个属性设置一些样式
    可以通过在标签上设置active-class来改名,也可以在router/index.js中使用linkActiveClass来批量改名-->

    <!--4.不想使用 router-link标签时,可以通过代码跳转url-->
    <!--    <button @click="homeBtn">首页</button>-->
    <!--    <button @click="aboutBtn">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--1.使用动态路由传递参数-->
    <!--<router-link :to="'/user/' + userId">用户</router-link>-->
    <!--使用button-->
    <button @click="userClick">用户</button>
    <!--2.使用query传递参数-->
    <!--<router-link :to="{path: '/profile', query: {
      name: '小明',
      age: 18,
      height: 1.88
    }}">档案</router-link>-->
    <!--使用button-->
    <button @click="profileClick">档案</button>

    <!--使用keep-alive可以使所有放在router-view的组件不会频繁创建和销毁,提高性能-->
    <!--使用exclude属性可以排除掉不想缓存的组件,属性值是组件的name,多个组件以,隔开不能有空格-->
    <!--使用include属性包含排除掉想缓存的组件-->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'wangermazi'
      }
    },
    methods: {
      homeBtn() {
        //使用$router调用函数跳转
        this.$router.push('/home');
        // this.$router.replace('/home');
      },
      aboutBtn() {
        this.$router.push('/about');
        // this.$router.replace('/about');
      },
      userClick() {
        this.$router.push('/user/' + this.userId);
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: '小红',
            age: 17,
            height: 1.77
          }
        });
      }
    }
  }
</script>

<style>
  .active {
    background-color: #42b983;
  }
</style>

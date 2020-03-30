<template>
  <tab-bar>
    <!--绑定的是变量就需要使用动态绑定,直接写字符串,就不需要动态绑定-->
    <tab-bar-item path="/home">
      <!--在dom中使用别名需要在前面加上~符号-->
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  const TabBar = () => import('common/tabbar/TabBar')
  const TabBarItem = () => import('common/tabbar/TabBarItem')
  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>

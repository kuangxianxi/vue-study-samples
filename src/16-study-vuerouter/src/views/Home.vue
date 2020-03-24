<template>
  <div>
    <h2>我是Home</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    //组件内守卫
    beforeRouteEnter: (to, from, next) => {
      //...
      next();
    },
    created() {
      console.log("Home created");
    },
    destroyed() {
      console.log("Home destroyed");
    },
    //当此组件被keep-alive包裹时,才可以activated和deactivated才起作用
    activated() {
      console.log("Home activated");
      this.$router.push(this.path);
    },
    deactivated() {
      console.log("Home deactivated");
    },
    //使用activated和beforeRouteLeave来缓存页面跳转之前的状态(path),以便跳转回来依旧是之前的状态
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>我是用户</h2>
    <!--1.可以使用$route获取动态路由后面的参数-->
    <h2>{{$route.params.userId}}</h2>
    <!--2.还可以使用query获取参数,见:profile.vue-->
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>我是用户</h2>
    <!--可以使用$route获取动态路由后面的参数-->
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>

</style>
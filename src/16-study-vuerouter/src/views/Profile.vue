<template>
  <div>
    <h2>我是Profile</h2>
    <!--通过query获取传入的参数-->
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log("Profile created");
    },
    destroyed() {
      console.log("Profile destroyed");
    }
  }
</script>

<style scoped>

</style>
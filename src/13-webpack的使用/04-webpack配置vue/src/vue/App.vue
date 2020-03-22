<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        message: 'Hello webpack'
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 50px;
    color: #ffffff;
  }
</style>
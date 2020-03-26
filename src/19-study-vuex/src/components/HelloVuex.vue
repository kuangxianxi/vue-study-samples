<template>
  <div>
    <h2>-------HelloVuex-------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.gt20Stus}}</h2>
    <h2>{{$store.getters.gt20StusLength}}</h2>
    <h2>{{$store.getters.gtAgeStus(13)}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
<template>
  <div id="home-nav">
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
  const NavBar = () => import('common/navbar/NavBar');
  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  #home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

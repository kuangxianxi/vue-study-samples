<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon" />
    <slot v-else name="item-icon-active" />
    <!--由于slot会被替换掉,所以使用div来包裹-->
    <div :style="activeStyle">
      <slot name="item-text" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default() {
          return 'deepPink';
        }
      }
    },
    computed: {
      isActive() {
        //获取组件是否是活跃状态
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path, () => {});
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: top;
    margin-bottom: 2px;
  }
</style>
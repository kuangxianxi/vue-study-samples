<template>
  <div id="app">
    <h2>-------我是app-------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info信息</button>
    <button @click="updateStudents">修改students信息</button>

    <button @click="test">测试常量名</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementCount(5)">+5</button>
    <h2>{{$store.getters.gt20Stus}}</h2>
    <h2>{{$store.getters.gt20StusLength}}</h2>
    <h2>{{$store.getters.gtAgeStus(24)}}</h2>
    <hello-vue/>
  </div>
</template>

<script>
  import {TEST} from './store/mutation-types'

  const HelloVue = () => import('./components/HelloVuex');
  export default {
    components: {
      HelloVue
    },
    methods: {
      increment() {
        //通过commit方法执行mutation中的方法,更新数据
        this.$store.commit('increment');
      },
      decrement() {
        this.$store.commit('decrement');
      },
      incrementCount(count) {
        //使用mutation更新state传入参数
        //普通的提交风格
        // this.$store.commit('incrementCount', count);
        //特殊的提交风格
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      updateInfo() {
        this.$store.commit('updateInfo')
      },
      test() {
        this.$store.commit(TEST);
      },
      updateStudents() {
        // this.$store.commit('updateStudents')

        //通过dispatch调用actions异步操作
        // this.$store.dispatch('aUpdateStudents', '参数')

        //想在异步操作执行成功后进行一些操作
        this.$store
            .dispatch('aUpdateStudents', '参数')
            .then((res) => {
              console.log(res);
            })
      }
    }
  }
</script>

<style>

</style>

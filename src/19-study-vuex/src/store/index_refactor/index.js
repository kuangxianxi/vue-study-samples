import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
Vue.use(Vuex)

const state = {
  //state: 用来保存状态信息
  //vuex推荐单一状态树,即只用一个Vuex.Store对象保存所有状态数据,而不是创建多个实例分类管理
  counter: 0,
  students: [
    {name: '小明', age: 18, height: 1.88},
    {name: '小白', age: 22, height: 1.82},
    {name: '小红', age: 25, height: 1.78},
    {name: '小绿', age: 9, height: 1.43},
    {name: '小蓝', age: 20, height: 1.68},
  ],
  info: {
    name: '小孔', age: 18
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    //Vuex推荐单一状态树,但是当数据量大时,可能不容易维护,
    //所以提出了modules概念,可以创建module,每个module都包括state、getters、mutations等
    //moduleA 调用mutations和actions与之前一样,都是使用commit和dispatch
    moduleA
  },

})

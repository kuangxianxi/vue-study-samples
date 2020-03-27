import Vue from 'vue'
import Vuex from 'vuex'
import {TEST} from './mutation-types'

Vue.use(Vuex)

const moduleA = {
  state: {

  },
  mutations: {

  },
  getters: {
    //module中的getters除了state和getters两个参数以外,还有一个rootState,可以获取到根store中的state
    test(state, getters, rootState) {

    }
  },
  //...
};

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    //一、vuex推荐的唯一更新state的方式,包含两个部分事件类型和回调函数
    //事件类型(state){ 回调函数 }
    //定义方法,方法中默认有一个参数state,也可以有自己传入的参数
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //二、普通方式的更新,count就是特指传过来的数据
    // incrementCount(state, count) {
    //   state.counter += count;
    // }
    //特殊方式的更新,第二个参数payload就不仅仅是传过来的count,而是包括type的一个对象
    incrementCount(state, payload) {
      state.counter += payload.count;
    },
    //三、数据的响应式
    //要求必须在创建时就初始化的数据才具有响应式,否则就需要借助Vue的相关方法做到响应式
    updateInfo(state) {
      //如果想添加一个属性,此属性没有在创建的时候初始化,则不具备响应式
      // state.info.address = '地球';
      //需要借助Vue的set方法,将新增的属性添加到响应式系统中
      // Vue.set(state.info, 'address', '地球');

      //同样的如果像删除一个属性,也需要借助Vue的delete方法才能做到响应式
      // delete state.info.age;
      Vue.delete(state.info, 'age');
    },
    //四、mutations的常量类型：目前定义方和使用方都是手写或者复制的方式控制方法名,容易出错或者不容易维护,可以提取一个常量供双方使用
    [TEST]() {
      console.log('测试');
    },
    updateStudents(state) {
      //五、vuex建议mutations内部保持同步操作,如果是异步操作就会出现devtools监控出现异常,所以异步操作都使用actions
      state.students[0].name = '小刘';
      //以下是错误的操作
      // setTimeout(() => {
      //   state.students[0].name = '小刘';
      // }, 1000)
    }
  },
  actions: {
    //一、Vuex建议所有异步操作定义位置,每个方法包含一个参数context,相当于Vuex.Store对象
    // aUpdateStudents(context) {
    //   setTimeout(() => {
    //     //同步操作调用mutations更新state,
    //     context.commit('updateStudents')
    //   }, 1000)
    // }
    //二、同样可以传递参数
    // aUpdateStudents(context, payload) {
    //   setTimeout(() => {
    //     //同步操作调用mutations更新state,
    //     context.commit('updateStudents');
    //     console.log(payload);
    //   }, 1000)
    // }
    //三、想在异步操作执行成功后进行一些操作,可以使用Promise
    aUpdateStudents(context, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          //同步操作调用mutations更新state,
          context.commit('updateStudents');
          console.log(payload);
          resolve('操作完成');
        }, 1000)
      })
    }

  },
  modules: {
    //Vuex推荐单一状态树,但是当数据量大时,可能不容易维护,
    //所以提出了modules概念,可以创建module,每个module都包括state、getters、mutations等
    //moduleA 调用mutations和actions与之前一样,都是使用commit和dispatch
    moduleA
  },
  getters: {
    //getters:的使用场景类似于Vue中的computed
    //getters有两个默认参数,第一个参数是state,第二个参数是getters
    //演示1：获取所有年龄大于20的学生
    gt20Stus(state) {
      return state.students.filter(s => s.age > 20);
    },
    //演示2：获取所有年龄大于20的学生的个数
    // gt20StusLength(state) {
    //   return state.students.filter(s => s.age > 20).length;
    // }
    gt20StusLength(state, getters) {
      return getters.gt20Stus.length;
    },
    //演示3：动态传入年龄,返回年龄大于参数的学生
    //getters不接受其他参数,所以可以使getters返回一个函数,在返回的函数中传入参数
    // gtAgeStus(state) {
    //   return function (age) {
    //     return state.students.filter(s => s.age > age);
    //   }
    // }
    gtAgeStus(state) {
      //使用箭头函数
      return age => state.students.filter(s => s.age > age);
    }
  }
})

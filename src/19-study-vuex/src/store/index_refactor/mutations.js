import Vue from "vue";

export default {
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
};
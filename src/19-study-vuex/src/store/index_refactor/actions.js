export default {
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
}
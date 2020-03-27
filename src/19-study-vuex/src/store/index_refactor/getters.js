export default {
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
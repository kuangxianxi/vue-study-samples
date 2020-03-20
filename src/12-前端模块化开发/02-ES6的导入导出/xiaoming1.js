//1.通过对象导出
let name = '小明1';

function sum(num1, num2) {
  return num1 + num2;
}

export {name, sum}

//2.在定义的时候导出
export let age = 18;

//3.导出函数或者类
export function print(value) {
  console.log(value);
}

export class Dog {
  name = '旺财';

  run() {
    console.log(this.name + '在跑');
  }
}

//4.export default  适用于不想导出确切的数据名, export default只能存在一个

export default {
  address: '安徽省'
}
// ..其他代码

//1.导入 通过对象导出的数据
//2.导入 定义数据时导出的数据
//3.导入 导出的函数或者类
import addr, * as All from "./xiaoming1.js";
import {age, Dog, name, print, sum} from "./xiaoming1.js";

console.log(name);
console.log(sum(10, 3));

console.log(age);

let dog = new Dog();
dog.run();
print(dog.name);

//4.导入 export default导出的数据

console.log(addr.address);

//5.导入全部

console.log(All.age);
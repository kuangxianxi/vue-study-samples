import axios from 'axios';

const axiosInstance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000'
});

export const test = (config) =>{
  //由于axios()的返回值就是一个Promise,所以可以直接返回给调用方执行回调
  return axiosInstance1(config)
}
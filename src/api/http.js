import axios from 'axios';

// get请求
export function get(url,sendData){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:sendData}).then(res=>{
            resolve(res.data);    
      }).catch(error=>{
            reject(error);    
      })                 
    })
}

// post请求
export function post(url,sendData){
    return new Promise((resolve,reject)=>{
        axios.post(url,sendData).then(res=>{
            resolve(res.data);    
      }).catch(error=>{
            reject(error);    
      })                 
    })
}
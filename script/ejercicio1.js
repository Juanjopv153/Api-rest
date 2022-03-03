let x = 10
let y= 100
const data = new Promise((resolve, reject)=>{
    if(x==10 && y==100){
        resolve('La variable se la come su mamá')
    }
    else{
        reject('La variable no se la come su mamá :(')
    }
})

console.log(data);

data.then(res =>{
    alert(res)
}).catch(error=>{
    alert(error)})
const data = [
    {
        a: 1
    },
    {
        a: 2
    }
]

console.log(data);
data.splice(0,0,{a:13})
console.log(data);
const t = data.splice(2,1)
data.splice(0,0,t)
console.log(data);
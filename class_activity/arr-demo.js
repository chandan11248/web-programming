const arr=["apple",12,20.45,"thank you"];
console.log(arr);
console.log("element at index :0" +arr[0]);
console.log("sorted",arr.sort())
const x=[]
x[0]=12
x[1]=32
x[2]=23
console.log(x)
for (let i=0;i<x.length;i++)
{
    console.log(`Elemnt at index ${i}:${x[i]}`);
}
x.push(100)
console.log(x)
x.pop()
console.log(x)
x.forEach(dispalyArr);
function dispalyArr(val,index,x)
{

    console.log(x[index]);
}
console.log("----------------------------------------------------------------------------");
x.forEach((val,index,x)=>console.log(val));

console.log()
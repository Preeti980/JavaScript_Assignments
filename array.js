//product of the array product
let arr=[]
let input;

while(true){
    input = prompt("enter value of array");
    if(input === null){
     break;   
    }
    arr.push(input)
}
console.log(arr);
function Find_prod(arr){
 let   product =1
   for(let i=0;i<arr.length;i++){
product = product*arr[i]
   }
   return product
}
console.log(Find_prod(arr));
const input=[1,2,-2,11,7,1];
const output=7;  
const input1=[1,4,7,2,4,7,8];
const output1=4; 

let arr=[...new Set(input1)];
console.log(arr);

function secondLargest(input1){
  let arr=[...new Set(input1)].sort((a,b)=>a-b);   
  return arr[arr.length-2];
}

let fk= secondLargest(input1);
console.log(fk); 	
 
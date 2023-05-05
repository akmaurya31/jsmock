const input1={a:1,b:2,c:10,d:25,e:30};
const input2={a:21,b:2,e:30,d:10};   
console.log(input1);
console.log(input2);   
const output={d:10,e:12}   
function func(input1,input2){
  let obj={};
  for(let i in input1){
    if(input1[i]==input2[i]){
      obj[i]=input1[i];
    }       
  }
  return obj;
}
let fk= func(input1,input2);
console.log("result: ",fk); 	 
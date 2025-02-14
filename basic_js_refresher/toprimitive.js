let x={x:98 ,valueOf(){
    return 98;}}
console.log(100-x);

let obj1={x:98 , y:99};
console.log(100-obj1);

let obj2={x:98 ,toString(){ return "98"}};
console.log(100-obj2);

let obj3={x:98 ,valueOf(){
   return {};
}};
console.log(100-obj3);

let obj5={x:99 ,toString(){
   return {};
}};
console.log(100-obj5);
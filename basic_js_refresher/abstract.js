let obj={name:100 ,valueOf(){ return 100;}};

console.log(99==obj);
console.log(100==obj);

let obj2={x:10};
let obj3={x:10};
console.log(obj2===obj3);
console.log(obj2===obj2);
console.log(0===-0);
let arr=[1,2,3,4];
console.log(typeof arr);
let obj={
        x:10,
        y:20
};
Object.freeze(obj);
obj.x=20;
obj.z=20;

let obj1={
    x:10,
    y:20
};
Object.seal(obj1);
obj1.x=40;
obj1.z=50;
console.log(obj1);
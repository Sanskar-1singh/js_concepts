let obj={
    x:1,
    y:2
}
let another=obj;
//here create method will create new  object into heap memory>>
//and another=obj synatx will act as pointer to same object in heap memory>>>
 
const newobj=Object.create(obj);
newobj.x=99;
another.x=100;
console.log(newobj,obj,another)
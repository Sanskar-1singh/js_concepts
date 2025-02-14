//arrays are also custom object in js
//index of the element is the key and the element it self is the value


//first function->MAP FUNCTION

function square(el){
    return el*el;
}
function cube(x){
    return x*x*x;
}
function isevenorodd(x){
    if(x%2==0) return "even";
    else return "odd";
}
const arr=[1,2,3,4,5];
const cubeq=arr.map(cube);
console.log(cubeq);
const squ=arr.map(square);
console.log(squ);
const res=arr.map(isevenorodd);
console.log(res);

//in map function you just have to passed the function you dont have to call that function explicitly>>>>




const newArr=[9,8,7,6,5];

/**
 if the function that we are passing in map takes two arguments
 then first argument will be accessing the actual value
 second arguments will be accessing index of that value
 */

 function print(element,idx){
    return `element at index ${idx} is ${element}`;
 }

 /**
  *here map is looping over every element 
  and then passing element index in the function print
  */

  const res2=newArr.map(print);
  console.log(res2);
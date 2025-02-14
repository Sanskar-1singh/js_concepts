setTimeout(function(){
    console.log("hi");
} ,1000);

function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(10,function exec(){
    console.log("i am excited");
})

/**
 * fun->HOF it takes function as an arguments and function as arguments is called as CALLBACK function>>>>
 * 
 * 
 * DIASDVANTAGE OF CALLBACK
 * 
 * callback hell
 * inversion of control>>
 */

let arr=[1,100,9,13,1,0,52];
arr.sort(function cmp(a,b){
    return a-b;
})
console.log(arr);



//inversion of control>>>

 
function dotask(fn ,x){
    //whole implementation is done by team A
    fn(x*x);
}

//here teamb tries to do it
dotask(function exec(num){
     //this is inversion of control>>>
    console.log("woah num is",num);
},9);
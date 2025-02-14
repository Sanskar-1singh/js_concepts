/**
 * reduce is a higher order function available for arrays
 * reduce also takes a function f as an arguments
 * what reduce does is it one by one goes to every element of the array 
 * say the cureent element is arr[i]
 * reduce will pass this element to the function f and accumulate the result  of further calls with this particular 
 * result
 */

const arr=[1,2,3,4,5,6];
function sum(prevresult,currvalue){
    return prevresult+currvalue;
}

const result=arr.reduce(sum);
console.log(result);



function addprices(prevresult,currvalue){
    console.log(prevresult,currvalue);
    let newprice=prevresult.price+currvalue.price;
    return {price:newprice};
}

let cart=[{price:100000 ,name:"iphone"},{price:500 , name:"backcover"},{price:300 , name:"glass"}];
const totalprice=cart.reduce(addprices);
console.log(totalprice,totalprice.price);
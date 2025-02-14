/**
 * filter function
 * filter is also a HOF.it also loop over array element there is one special thing about 
 * filter that argument function f that we have to pass inside a filter should always return a boolean
 * otherwise output will converted to a boolean
 * 
 * filter loops over every element passes that element in the argument function and then if the output of this 
 * of this funcction call is true ,then it store the original element in new array otherwise it doesnt add new elemnt in new array
 * 
 * 
 */

function oddoreven(x){
    return (x%2==0);
}

let arr=[1,2,3,4,5,6,7,8,9];
const result=arr.filter(oddoreven);
console.log(result);
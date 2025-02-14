const arr=[1,2,3,4,5,6];



function print(element,idx){
    return `element at index ${idx} is ${element}`;
 }

function customMapper(arr,func){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(func(arr[i],i));
    }
    return result;
}

const value=customMapper(arr,print);
console.log(value);

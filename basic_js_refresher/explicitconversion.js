console.log(Boolean(""));
let x=Number("123");
console.log(x);
console.log(typeof(x));
console.log(Number("123"));

//NAN>>>>>

console.log(Number("123"));
console.log(Number("abcd"));
console.log(Number("0xa"));
console.log(Number("010"));
let y=NaN;
console.log(y==NaN);
console.log(isNaN(y));
console.log(isNaN("sanket")); //isNaN converts incoming input to number>>

console.log(Number.isNaN("sanket"));//it check wheteher number is nan or not>>>


//LOGIC OF Number.isNan(x)>>>>
if(typeof(y)=='number' && y!==y){
         console.log(true);
}else{
    console.log(false);
}

gun();
function gun(){
    console.log("shootttt");
}
//hoisting can be happen with variable and function both>>>>
//above phenomena is called hoisting that we can access function and varaiable declare with var before their declaration 
//it is called hoisting>>>>





//TDZ

//variable ko actually declare krne se pahele aur scope ke start ke baad  ka time TDZ khelata hai agar isme ham us value ko access 
//krne ki khoshish krenge toh REFERENCEERROR aajayega>>>>
//but TDZ  is not applicable to var it is only apply to let and const>>>>]

console.log(x);
//it is TDZ region>>>>>
let x=10;
console.log(x);

//shorthand synatx of returning promise with state already resolved is short syntax is>>

console.log("start of file");
setTimeout(function timer1(){
    console.log("timer done");
},0);

for(let i=0;i<10000000000;i++){
    //something;
}
let x=Promise.resolve("sanket promise");
x.then(function processpromise(value) {
    console.log("whose promise",value);
});

setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log("end of file");
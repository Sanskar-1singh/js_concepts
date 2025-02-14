function blocking_for_loop(){
    for(let i=0;i<10000000000;i++){}
}

console.log("start of file");
setTimeout(function timer1(){
    console.log("timer 1 done");
},0);

blocking_for_loop();

let x=Promise.resolve("sanket promise1");
x.then(function processpromise(value){
    console.log("whose promise",value);
    blocking_for_loop();
});

let y=Promise.resolve("sanket promise2");
y.then(function processpromise(value){
    console.log("whose promsie",value);
    setTimeout(function () {console.log("ok done");},0);
});

let z=Promise.resolve("sanket promise3");
z.then(function processpromise(value){
    console.log("whose promise",value);
});

setTimeout(function timer2(){
    console.log("timer2 done");
},0);

console.log("end of the file");
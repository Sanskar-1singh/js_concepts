//01
// console.log("hello world");
// setTimeout(function exec(){
//     console.log("timer done");
// },0);
// console.log("end");


//2
// console.log("hello world");
// setTimeout(function exec(){
//     console.log("timer done");
// },0);
// for(let i=0;i<1000000000;i++){
//     //some task
// }
// console.log("end");


//03
console.log("hello world");
for(let i=0;i<3;i++){
    setTimeout(function exec(){
            console.log("timer done");
    },10);
}

for(let i=0;i<1000000000;i++){
    //some task
}
console.log("end");
Promise.resolve().then(()=>{
    console.log("promise 1");
});
process.nextTick(()=>{
    console.log("print from nexttick");
});
for(let i=0;i<10000000000;i++){

}
setTimeout(()=>{
    console.log("print from timeout");
},0);
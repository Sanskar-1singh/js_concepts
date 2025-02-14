console.log("start");

setTimeout(()=>{
    console.log("timer 1");
},0);
Promise.resolve().then(()=> console.log("promise 1"));
process.nextTick(()=> console.log("next tick"));
setTimeout(()=>{
    process.nextTick(()=>{
        console.log("next tick 1");
    })
},0);

process.nextTick(()=>{
    console.log("next tick 2");
});

for(let i=0;i<1000000000;i++){}

console.log("end");

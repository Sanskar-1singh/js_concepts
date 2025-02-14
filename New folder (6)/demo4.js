console.log("start");
setTimeout(()=>{
    process.nextTick(()=>{
          console.log("next tick 2");
    })
    Promise.resolve().then(()=> console.log("promise 2"));

    for(let i=0;i<1000000000;i++){}

},0);

Promise.resolve().then(()=>{
    console.log("promsie 1");
});

process.nextTick(()=>{
    console.log("next  tick 1");
})
setTimeout(()=>{
    console.log("timer 2");
},0);
console.log("end");
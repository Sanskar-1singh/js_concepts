const fs=require('fs');

fs.readFile('./readme.md','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

process.nextTick(()=>{
    console.log("next tick");
});

Promise.resolve().then(()=>{
    console.log("promise 1");
})

setTimeout(()=>{
    console.log("timer 1")
},0);

setImmediate(()=>{
    console.log("immediate callback");
});

for(let i=0;i<10000000000;i++){};
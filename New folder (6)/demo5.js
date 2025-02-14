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
})
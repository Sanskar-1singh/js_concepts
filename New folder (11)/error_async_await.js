function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting to download data from",url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content="abcdef";
            reject(content);
        },1000);
    });
}
async function steps(){
    try{
        console.log("startign steps");
        const downloaddata=await download("www.xyz.com");
        return downloaddata;
    }catch(error){
        console.log("error is",error);  
    }
    finally{
         console.log("ending"); 
    }
}

steps();
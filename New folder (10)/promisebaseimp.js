function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("download start");
        setTimeout(function exec1(){
            console.log("downloading is processing");
            let content="abcdef";
            resolve(content);
        },4000);
    });
}

function write(data){
    return new Promise(function exec4(resolve,reject){
        console.log("writting started",data);
        setTimeout(function writing(){
            console.log("writting completed");
            let filename="file.txt";
            resolve(filename);
        },4000);
    });
}

function upload(url,filename){
    return new Promise(function exec5(resolve,reject){
        console.log("uploading started");
        setTimeout(function up(){
            console.log("file successfully uploaded");
            resolve("success");
        },4000);
    });
}


//PROMISE CHAINNG CONCEPT>>>

//important concept to remember>>



x=download("www.xyz.com")
x.then(function fulfilhandler1(value){
    console.log("file successfuly downloaded",value);
    return write(value);
})
.then(function exec6(value){
    console.log("written successfully");
    return upload(value,"wwww.xyz.com");
})
.then(function exec7(value){
    console.log("upload successfully",value);
})
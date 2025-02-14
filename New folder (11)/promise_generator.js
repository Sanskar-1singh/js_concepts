function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting download data from",url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content="abcdef";
            resolve(content);
        },6000);
    });
}

function writefile(data){
    return new Promise(function exec(resolve,reject){
           console.log("starting writting",data);
           setTimeout(function write(){
            console.log("written successfully");
            const filename="file1.txt";
            resolve(filename);
           },6000);
    });
}

function uploadfile(file,url){
    return new Promise(function exec(resolve,reject){
        console.log("starting upload",file,"on",url);
        setTimeout(function up(){
            console.log("upload successfully");
            const response="success";
            resolve(response);
        },2000);
    });
}

function  doafterReceiving(value){
    let future=iter.next(value);
    console.log("future is",future);
    if(future.done) return;

    future.value.then(doafterReceiving);
}

function* steps(){
    const downloaddata=yield download("www.xyz.com");
    console.log("data downloaded is",downloaddata);

    const filewritten=yield writefile(downloaddata);
    console.log("file is written is",filewritten);

    const uploadresponse=yield uploadfile(filewritten,"www.google.com");
    console.log("upload response is",uploadresponse);
    return uploadresponse; 
}

const iter=steps();
const future=iter.next();

for(let i=0;i<10000000000;i++){ }
future.value.then(doafterReceiving);

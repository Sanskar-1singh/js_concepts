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


async function steps(){
    const downloaddata=await download("www.xyz.com");
    console.log("data downloaded is",downloaddata);

    const filewritten=await writefile(downloaddata);
    console.log("file is written is",filewritten);

    const uploadresponse=await uploadfile(filewritten,"www.google.com");
    console.log("upload response is",uploadresponse);
    return uploadresponse; 
}

steps().then((value)=>console.log("we have completed steps with",value));
console.log("outside");
for(let i=0;i<10000000000;i++){}
setTimeout(function(){
     console.log("timer done")
},4000);

console.log("for loop done");

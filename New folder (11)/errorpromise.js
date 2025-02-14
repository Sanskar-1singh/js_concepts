function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting download data from",url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content="abcdef";
            reject(content);
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


download("www.xyz.com")
.then(function processdownload(value){
    console.log("downloading done with following value",value);
    return writefile(value);
},
// function downloadreject(value){
//   console.log("download reject",value);
// //   throw value;
// }
)
.then(function processWrite(value){
    console.log("data written in the file with name",value);
    return uploadfile(value,"www.upload.com");
},
// function writereject(value){
//     console.log("write reject",value);
//     // throw value;
//   }
)
.then(function processUpload(value){
    console.log("we have uploaded with",value);
},
// function uploadreject(value){
//     console.log("upload reject",value);
//   }
)
.catch(function f(err){
   console.log("catching error",err);
})
.finally(function fu(){
    console.log("executing finally");
})

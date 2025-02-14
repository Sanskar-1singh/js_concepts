function download(url,cb){
    /**
     * download content from the given url  and passed the download content to the given callback cb
     */

    console.log("starting to download data from",url);
    setTimeout(function down(){
        console.log("downloading completed");
        const content="abcdef";
        cb(content);
    },4000);
}

function writefile(data,cb){
console.log("starting writting a file", data);
setTimeout(function write(){
    console.log("completed writting the data in file");
    const filename="file.txt";
    cb(filename);
},5000);  
}

function upload(url,file,cb){
        console.log("starting uploading",file,"on",url);
        setTimeout(function up(){
            console.log("upload successfully");
            const response="success";
            cb(response);
        },2000);
}
download("wwww.xyz.com",function processdownload(content){
      console.log("we are now going to process the download  data",content);
      writefile(content,function processwrite(filename){
        console.log("we have download and written the file now will upload",filename);

        upload("www.upload.com",filename,function processupload(response){
            console.log("we have uploaded with",response);
        });
      });
});
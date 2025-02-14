//why callbacks are having issue???

// function download(url,cb){
//     setTimeout(function exec(){
//         const content="abcdef";
//         cb(content);
//         //cb(content);
//     },5000);
// }

// download("www.xyz.com",function processDownload(data){
//     console.log("download data is",data);
// })



//promise based syntax>>> to solve issue of inversion of control>>
//here in promise we dont give our callback access to third party function and also if calling of callback occur more than once it 
//causes no effect and also if we dont call resolve or reject fucntion then also it will show pending state of our promiuse object>>>
function download(url){
    console.log("started downloading content from",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p(){
            console.log("completed downloading data in 5s");
            const content="abcdef";
            res(content);
        },5000);
    });
}

let x=download("wwww.xyz.com");
x.then(function fulfillhandler(value){
    console.log("content download is",value);
})


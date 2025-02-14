function fetchdata(url){
    return new  Promise(function(resolve,reject){
        console.log("started downloading from",url);
        setTimeout(function processDownloading(){
            let data="dummy data";
            resolve(data);
            console.log("download completed");
            },7000);
    });
}

console.log("start");
let promiseobj=fetchdata("uifhuifio");
promiseobj.then(function A(value){
    console.log("value is",value);
})

console.log("end");
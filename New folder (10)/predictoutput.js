function fetchdata(url){
    return new Promise(function (resolve,reject){
        console.log("started downloading from",url);
        setTimeout(function processDownloading(){
            let data="dummy data";
            console.log("download completed");
            resolve(data);
        },7000);
    });
}

console.log("start");
let promiseobj=fetchdata("sjsdhfcisdfh");
promiseobj.then(function  A(value){
    console.log("value is",value);
})

console.log("end");
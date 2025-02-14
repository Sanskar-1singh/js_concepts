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


//dot then function also return promise to me >>>
let x=download("wwww.xyz.com");
x.then(function fulfillhandler(value){
    console.log("content download is",value);
    // return "NEW PROMISE STRING";
},
    function rejectionHandler(){
        console.log("rejected with",value);
    }
)
.then(function newfulfilledhandler(value){
    console.log("value from chained then promise",value);
}
)

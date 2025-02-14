function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("starting to download data from",url);
        setTimeout(function down(){
            console.log("downloading completed");
            const content="abcdef";
            resolve(content);
        },1000);
    });
}

const p1=download("www.abc.com");
const p2=download("www.abc2.com");
const p3=download("www.abc3.com");

//all the promise will only be register in microtask queue once all the promise is get resolved>>>
Promise.all([p1,p2,p3]).then(function fullfillhandler(value){
    console.log(value);
    console.log("done");
})
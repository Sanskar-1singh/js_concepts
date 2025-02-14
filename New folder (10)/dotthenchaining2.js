Promise.resolve("foo")
.then(function exec(string){
    return new Promise(function exec1(resolve,reject){
        setTimeout(function exec2(){
            string+="bar";
            resolve(string);
        },10000);
    });
})
.then(function exec3(string){
    setTimeout(function exec4(){
        string +="baz";
        console.log(string);
    },1);
    return 12;
})
.then(function exec5(num){
   console.log("last hope");
   console.log(num);
});


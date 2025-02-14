function Product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;
    
}
const p=new Product("bag",100,"cool bag");
console.log(p);

function download(url){
    return new Promise(function exec(resolve,reject){
        console.log("hello");
        setTimeout(function exec1(){
            console.log("promise will resolved");
            let x=51;
            if(x%2==0){
                resolve(x);
            }else{
                reject(x);
            }
        },10000);
    }) ;
}

download("www.xyz.com")
.then(function exec3(){
    console.log("done execution");
})
.catch(function exec5(err){
    console.log("error is",err);
})

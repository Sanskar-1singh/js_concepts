function f(x,fn){
    console.log(x);
     console.log(fn);
    fn();
}

f(10,function exec(){
    console.log("i am an expression passes to a hof");
})

setTimeout(function exec(){
    console.log("hello");
},"5000");
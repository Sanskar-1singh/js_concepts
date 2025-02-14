function process(){
    let i=0;
    function innerprocess(){
        let y=10;
        i+=1;
        return i;
    }
    return innerprocess;//we are not calling function we are just returning function>>>

}
let res=process();
console.log(res);
console.log(res());
console.log(res());
console.log(res());
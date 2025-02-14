function* fetchNextelement(){
    console.log("inside generator");

    const x=10;
    console.log(yield 11);
    console.log("entering after a yield");
    const y=x+(yield 30);
    console.log("value of y is",y);
}
console.log("start");
const iter=fetchNextelement();
console.log("called generator");
console.log("first",iter.next());
console.log("second",iter.next(55));
console.log("third",iter.next(17)); 


function fun(){
    let x=10;
    function inner(){
        x+=10;
        console.log(x*10);
    }
    return inner;
}

let res=fun();
res();
function* fetchNextelement(){
    console.log("starting")
    console.log("i am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    yield 3;
    yield 3;
    // return 10;
    yield 4;
}

const iter=fetchNextelement();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


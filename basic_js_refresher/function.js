function isPrime(x){
    for(let i=2;i<x;i++){
        if(x%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(8));

let y=(10>7)?5:7;
console.log(y);
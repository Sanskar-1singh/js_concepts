let x={
    name:"john",
    company:"google",
    designation:"SDE3"
}

const keysofx=Object.keys(x);
console.log(keysofx);
const valueofx=Object.values(x);
console.log(valueofx);

const entry=Object.entries(x);
console.log(entry);

//loop over an objects
for(let y of Object.entries(x)){
    console.log(y);
}

//loop over keys
for(let y in x){
    console.log(y);
}


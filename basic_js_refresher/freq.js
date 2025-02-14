let str="javascript";
let x={

}
for(let i=0;i<str.length;i++){
     if(x[str[i]]){
        x[str[i]]+=1;;
     }
     else{
        x[str[i]]=1;
     }
}
console.log(x);

let name="sanket";
let company="google";
let str2=`${name} works in ${company}`;
console.log(str2);


let keys=Object.keys(x);
console.log(keys);  

let value=Object.values(x);
console.log(value);

let entry=Object.entries(x);
console.log(entry);

for(const entry of Object.entries(x)){
    console.log(entry);
}

for(const key in x){
    console.log(key,x[key]);
}
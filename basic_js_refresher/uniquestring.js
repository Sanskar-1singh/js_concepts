let arr=["abc","hello","c","d","abc" ,"c"];
let x={};
for(let i=0;i<arr.length;i++){
    if(x[arr[i]]){
        continue;
    }
else{
    x[arr[i]]=1;
}
}

for(const key in x){
    console.log(key);
}
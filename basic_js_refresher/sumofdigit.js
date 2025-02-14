let num=123456;
let ans=0;
while(num>0){
    let r=num%10;
    ans+=r;
    num=Math.floor(num/10);
}
console.log(ans);
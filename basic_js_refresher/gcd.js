function gcd(num1,num2){
    if(num1==0 || num2==0){
        return Math.max(num1,num2);
    }
    let r1=num1%num2;
    gcd(num2,r1);
}
console.log(gcd(105,33));
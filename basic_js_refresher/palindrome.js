var num1=141;
var test=num1;
var x=0;
while(test>0){
   var y=test%10;
   x=x*10+y;
   test=Math.floor(test/10);
}
if(num1==x){
    console.log("yes");
}
else{
    console.log("No");
}
// var name="sanskar";

// var name2=new String("hello");
// var name3=String("bye");
// console.log(name);
// console.log(name2);
// console.log(name3);


// //string indexing

// console.log(name2[0]);

// console.log(name.length);

var num1=0;
var test=String(num1);
var test2="";

for(let i=test.length-1;i>=0;i--){
      test2+=test[i];
}

test2=+test2;
if(num1==test2){
    console.log("yes");
}
else{
    console.log("no");
}
console.log(typeof(test2));



console.log(null===undefined);

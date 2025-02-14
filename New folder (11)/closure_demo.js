function DO(task){ 
     setTimeout(function (){
        console.log(task);
     },2000);
}

DO("success");
console.log("done");

function process(){
    let i=0;
    let j=[1,2,3];
    let k=10;
    function innerProcess(){
        i+=1;
            console.log(j);
            return i;
    }
    return innerProcess;
}

let x=process();
console.log(x());

//function closure property will only remember those value which are necessary and essential to function>>
//here innerprocess will not remeber variable (K) as k is of no use>>>


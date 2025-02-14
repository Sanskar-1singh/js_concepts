function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createpromisewithtimeout(){
    return new Promise(function executor(resolve,reject){
        console.log("entering the executor callback in promise constructor");
        setTimeout(function(){
            let num=getRandomInt(10);
            if(num%2==0){
                resolve(num);
            }else{
                reject(num);
            }
        },10000);
        console.log("exiting the executor callback in the promise constructor");
    });
}
console.log("starting>>>>> ");
const p=createpromisewithtimeout();
console.log("we are now waiting for promise  to complete");
console.log("currently my promise  object is like >>>p",p);
 console.log("going to register my 1st set of handler");
p
.then(
    function fulfillhandler(value) { console.log("inside fulfillhandler1 with value",value);
                                      console.log("promise after fulfillment1 is ",p);
    },
     function rejectionHandler(value) { console.log("inside rejection handler1 with value",value)
                                         console.log("promise after rejection1 is ",p);
     }
    
);

console.log("going to register my 2nd set of handler");
p
.then(
    function fulfillhandler(value) { console.log("inside fulfillhandler2 with value",value);
                                      console.log("promise after fulfillment2 is ",p);
    },
     function rejectionHandler(value) { console.log("inside rejection handler2 with value",value)
                                         console.log("promise after rejection2 is ",p);
     }
    
);
console.log("ending");

for(let i=0;i<1000000000;i++){} 
console.log("ending of loop also");
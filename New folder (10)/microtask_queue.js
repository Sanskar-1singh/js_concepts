    function createpromise(){
        return new  Promise(function exec(resolve,reject){
            console.log("resolving the promise");
            resolve("done");
        });
    }

    setTimeout(function process(){
        console.log("timer completed");
    },0);

    let p=createpromise();
    p.then(function fulfillhandler1(value){
        console.log("we fulfilled1 with a  value",value);
    },function rejectionHandler() {});

    p.then(function fulfillhandler2(value){
        console.log("we fulfilled2 with a  value",value);
    },function rejectionHandler() {});

    p.then(function fulfillhandler3(value){
        console.log("we fulfilled3 with a  value",value);
    },function rejectionHandler() {});

  for(let i=0;i<10000000000;i++) {}
    console.log("ending");
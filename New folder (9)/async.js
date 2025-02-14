function timeconsumingloop(){
    console.log("loop start");
    for(let i=0;i<10000000000;i++){
        //some  task
    }
    console.log("loop ends");
}

function timeconsumingbyruntimefeature0(){
    console.log("starting timer");
    setTimeout(function exec0(){
        console.log("completed the timer0");
        for(let i=0;i<10000000000;i++){
            //some task
        }
    },5000 );
}

function timeconsumingbyruntimefeature1(){
    console.log("starting timer");
    setTimeout(function exec1(){
        console.log("completed the timer1");
    },0);
}

function timeconsumingbyruntimefeature2(){
    console.log("starting timer");
    setTimeout(function exec2(){
        console.log("completed timer 2");
    },200);
}

console.log("hi");
timeconsumingloop();
timeconsumingbyruntimefeature0();
timeconsumingbyruntimefeature1();
timeconsumingbyruntimefeature2();
timeconsumingloop();
console.log("bye");


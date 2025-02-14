function fun(){
    for(var i=0;i<10;i++){
        //do
    }
    console.log(i);
}
fun();

function process(x,y){
    if(x>y){
        let temp=1;
        x=y;
        y=temp;

    }
    return y-x;
}
process();

//LET DOESNT ALLOWS YOU TO DO RE-DECLARATION>>
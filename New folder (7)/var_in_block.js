function fun(){
    var i=5;
    while(i<10){
        var x=i;
        i++;
    }
    console.log(x);
}
fun();

var y=1;
console.log(z);
while(y<10){
    var z=10;
    console.log(z);
    z++;
    y++;
}
console.log("outside");
console.log(z);

{
    {
        {
            {
                {
                    var v=10;
                }
            }
        }
    }
}

console.log(v);
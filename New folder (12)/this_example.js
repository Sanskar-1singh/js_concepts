var obj={
    name:"sanket",
    company:"google",
    display:()=>{
        console.log(this.name,"works in",this.company);
    }
}

var obj1={
    name:"JD",
    company:"microsoft",
    display:()=>{
        setTimeout(()=>{
            console.log(this.name,"works in",this.company);
        },3000);
    }
}

var obj2={
    name:"sarthak",
    company:"phonepe",
    display:function (){
        setTimeout(()=>{
            console.log(this.name,"works in",this.company);
        },5000);
    }
}

obj.display();
obj1.display();
obj2.display();
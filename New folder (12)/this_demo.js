let iphone={
    name:"Iphone  13 pro",
    price:100000,
    description:"this is phone",
     rating:4.8,
     display:()=>{
        console.log("first display",this);  
     }
}


let macbook={
    name:"macbook  13 pro",
    price:1250000,
    description:"this is laptop",
     rating:4.9,
     display(){
        console.log("second display",this);  
     },
     console(){
        console.log(this.name);
     }
}

macbook.display();
iphone.display();
console.log(this);
macbook.console();
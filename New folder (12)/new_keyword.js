class Product{
    // name;
    // price;
    // description;
    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.description=d;
        //return "10"; if we return primtive value using return in constructor ->no effect
        //return {name:"hello",price:100,description:"gud one"}; but it have effect if we return object using return 
        //in constructor>>>

        //return this; if we  return this it is equaivalent to return nothing>>>
    }
    display(){
        //something
    }
}

const p=new Product("bag",100,"gud one");
console.log(p);
//here brand new object (P) is calling context>>
//NO CONCEPT OF CONSTRUCTOR OVERLOADING>>> class will only have one constructor>>
class Product{
    #name;

    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.description=d;
    }
    set Name(n){
        if(typeof(n)!='string'){
            console.log("invalid");
            return;
        }
        this.#name=n;
        return;
    }

    get Name(){
        return this.#name;
    }

    display(){
        console.log((this.#name,this.price,this.description));
    }
}

const p=new Product("bag",100,"cool bag");
p.Name="iphone";
console.log(p);
p.display();
console.log(p.Name);

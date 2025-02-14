function product(name){
    this.name=name;
}

let d=new product("iphone");
product.prototype.display=function(){
    console.log("name of product is",this.name);
}

d.display();

d.__proto__;
console.log(d.__proto__);

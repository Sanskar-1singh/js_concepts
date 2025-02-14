let x={
    name:"sanket",
    age:28,
    name2:"sarthak",
    age2:24
}
console.log(x);
console.log(x["name"]);
console.log(x["name2"]);
console.log(x.name);
console.log(x.name2);
x.name="sanskar"
console.log(x);
x.marks=100;
delete x.name;
console.log(x);
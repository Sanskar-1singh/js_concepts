// const x=10;

// console.log(x);

// {
//     {
//         {
//             const y=10;
//         }
//         // console.log(y); it will  give error because const is  block scoped as like as let >>>.
//     }
// }


const obj={x:10};
obj.x=9;
console.log(obj);
obj.y=15;
console.log(obj);
//WE CAN UPDATE VALUE OF CONST BUT WE CANT REASSIGN THE VALUE>>>


// const iphone={
//     name:"iphone",
//     price:100000,
//     rating:4.9,
//     display:function exec(){
//         let iphonered={
//             name:"iphonered",
//             price:110000,
//             print:()=>{
//                 console.log(this);
//             }
//         }
//         iphonered.print();
//     }
// }

// iphone.display();

const iphone={
    name:"iphone",
    price:100000,
    rating:4.9,
    display:()=>{
        let iphonered={
            name:"iphonered",
            price:110000,
            print:()=>{
                console.log(this);
            }
        }
        iphonered.print();
    }
}

iphone.display();

//here this keyword does lexical scoping for this keyword>>and at last it move to global scope which contain
//empty object and hence it print {}

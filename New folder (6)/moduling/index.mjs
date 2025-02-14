//const searchfunction=require('./searching.cjs'); //import all function and stored it in searchfunction variable as object
//console.log(searchfunction);
//console.log(searchfunction.linearsearch([5,7,96,8,2,3],2));

//destructure during destructuring we have to give same name but we can give alias  to them

//const { linearsearch,binarysearch }=require('./searching.cjs');
//const { linearsearch:ls,binarysearch:bs }=require('./searching.cjs');

//console.log(linearsearch([12,5,3],5));

//console.log(ls([1,2,3,4,5],4));

import search from './searching.cjs';

console.log(search.binarysearch([1,2,3,4],3));
console.log(search.linearsearch([1,2,3,4,5],3));

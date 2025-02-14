let arr=[1,2,46,96,74,6,63,6646,16,6];
arr.sort();
console.log(arr);

let b=[1,2,3,4,5,7,5,3,75,6,2,26,4,];
b.sort(function(a,b){
     return a-b;

});
console.log(b);

/**
 if a<b -> a-b will be negative ->if cmp function givces negative then a is placed before b
 sort is H.O.F the sort function takes a comparator function as arguments>>
 */
function fetchNextelement(array){
    let idx=0;
    function next(){
            if(idx==array.length){
                return {value:undefined ,done:true};
            }
            const nextelement=array[idx];
            idx++;
            return {value:nextelement,done:false};
    }
    return {x:next};
}

//SOMEWHERE WE CONSUME IT   

const automaticfetcher=fetchNextelement([99,11,12,13,0,1,2,3]);
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());
console.log(automaticfetcher.x());

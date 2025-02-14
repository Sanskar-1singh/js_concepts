function x(){
    console.log("wow");
}

(function x(y){
    console.log("hi",y);
})("sanket");

x();
//IIFE PREVENT FUNCTION FROM OGVERRIDING IN LARGE CODEBASE>>>

 console.log(teacher);
var teacher="sanket";//global
function fun(){ //global
    console.log(teacher);  //no error will be given 
    //console.log(content); //throw error
    var teacher="pulkit"; //scope of fun
    let content="js"; // content will only will be access after post declaration 
    if(content=="js"){
        let hours="120+";
        console.log(content,hours);
    }
    console.log(teacher,content);
}
fun();
console.log(teacher);
//console.log(content);


//  VAR USED FOR FUNCTION SCOPE AND IF THERE IS NOT ANY FUNCTION ITS FOR GLOBAL SCOPE VAR IS NOT USED FOR BLOCK SCOPE
//WHERE AS LET IS USED FOR BLOCK SCOPE>>>>
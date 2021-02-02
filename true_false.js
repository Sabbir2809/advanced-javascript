// Truthy and Falsy values

/*
False:
    0
    ""
    undefined
    null
    NaN

Truthy:
    1
    "0"
    " "
    []
*/

let name = 12;
if(name || name == 0){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}
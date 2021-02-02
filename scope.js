// Scope, block scope, access outer scope variable

let bonus = 47;
function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if(result > 0){
        var mood = "happy";
        // var mood = "happy";
        mood = "fishy";
        mood = "funky"
        console.log(mood);
    }
    console.log(day);
    // var day = "friday";
    let day = "friday";
    console.log(result);
    return result;
}
const output = sum(3, 7);
// console.log(result);
console.log(bonus);
console.log(output);


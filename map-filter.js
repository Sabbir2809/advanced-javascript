// map, filter, find, smart way to run for loop
/*
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/



const ans = number.map(function(element, index, array){
    // console.log(element, index, array);
    return element * element
});
console.log(ans);

const square = element => element * element;
const square = x => x * x;

const result = number.map(x => x * x);
console.log(result);


//filter
const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.filter(x => x < 5);
console.log(bigger);

// find
const isThere = num.find(x => x > 5);
console.log(isThere);
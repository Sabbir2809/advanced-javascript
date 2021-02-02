// Array slice, splice, array join elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const part = nums.slice(2,5);
console.log(part);
console.log(nums);

const removed = nums.splice(3, 5);
console.log(removed);



const together = nums.join(" ");
console.log(together);
// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));
// const calculateCircumference = function (radius) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calculateCircumference(radius));
// const calculateDiagram = function (radius) {
//   const output = [];
//   for (i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

// console.log(calculateDiagram(radius));

const arr = ["a", "b", "c", "d", "e", "f", "g"];

// console.log(arr.length); // Length
// console.log(arr[0]);

// Methods

// At method - we can check which value is where in big array it acccept both +.- value i want to check what is the last index of this array
console.log(arr.at(-1));
// push - if we want to add anything in array then we can use this [push always --------returen array length] and element will add in last
arr.push("c");
console.log(arr);
// pop - this methid will remove last element [it always return the deleted element and push always return length of element it change originall array]
arr.pop();
console.log(arr);
// shift - it will remove first element [it willl return the shifted element , it will modufy main array]
arr.shift();
console.log(arr);
// unshift methods - [it return lenght just like push . it add vaue at begining of the array , modify original array]
arr.unshift("a", { name: "msd" }, ["array"]);
console.log(arr);
// includes - [if we passed a value : it check whether the element is present or not ,it return true or false, it is case sensitive]
console.log(arr.includes("a")); // it return true
// fill [f]
const fill = arr.fill("fill method", 0, 2); // [1st [one is what we want to insert] 2nd [one is starting point] 3rd [lenght how much it will not include 0 index]
console.log(fill);

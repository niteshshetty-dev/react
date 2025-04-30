// //arrow functions

// const mul = (a, b) => a * b;

// const res = mul(2, 3);

// console.log("Arrow function:", res);

// //destructring

// const obj = {
//   name: "Nithesh",
//   age: "26",
// };

// const { name, age } = obj;

// console.log("Destructring:", name, age);

// //Array- filter, map, reduce

// const arr = [1, 2, 3, 4, 5, 6];

// const even_numbers = arr.filter((ele) => ele % 2);
// const squred_numbers = arr.map((ele) => ele * ele);
// const sum_of_numbers = arr.reduce((a, b) => a + b);

// console.log(
//   `Array: [${arr}] Filltered Array: [${even_numbers}] Mapped Array: [${squred_numbers}] Reduced Array: ${sum_of_numbers}`
// );

// //Async function

// async function async_function() {
//   console.log(`Data fetching ${new Date().toTimeString()}`);
//   const data = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   ).then((res) => res.json());
//   console.log(`Data loaded ${new Date().toTimeString()}, Data:`, data[1].name);
// }

// async_function();

// // asnyc function promise

// async function fetchData() {
//   return new Promise((resolve) => {
//     const data = fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     ).then((res) => res.json());
//     resolve(data);
//   });
// }

// fetchData().then((data) => console.log("Promise:", data[0].name));

// var a = 5;

// async function foo() {
//   const a = 5;
//   return new Promise((resolve) => resolve(a));
// }

// foo().then((data) => console.log(data));

// console.log(+"6" + 1);

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter();
// counter();

// for (var i = 1; i <= 3; i++) {
//   console.log("i:", i);
//   setTimeout(() => console.log(i), 1000);
// }

// var name1 = "alice";

// (function () {
//   var name1 = "Bob";
//   console.log("Hello, " + name1);
// })();

console.log("Start");

setTimeout(() => console.log("Time_out"), 0);

Promise.resolve().then(console.log("Promise 1"));

Promise.resolve().then(console.log("Promise 2"));

console.log("End");

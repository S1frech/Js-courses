// Функции

// function helloWorld() {
//   console.log("hello world");
// }
// helloWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }
// checkAccess();

// function sum(a, b = 0) {
//   console.log(a + b);
// }

// sum(5);

// function getName(name) {
//   console.log("до return");
//   return name;
//   console.log("после return");
// }
// console.log(getName("иван"));

// const name = "Alex";
// function getName(userName) {
//   return userName;
// }
// console.log(getName(name));

// let name = "Alex";
// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Peter";
//   console.log(userName, "function");
// }
// sayHi(name);
// console.log(name, "2");

// let name;
// function getName(useName = "гость") {
//   console.log(`привет ${useName}`);
// }
// getName();


// function createNum(a, b = 1) {
//   console.log(a ** b);
// }
// createNum(5, 2);

//===============================

// arr1 = [1, 2, 3];

// function n(arr) {
//   let sum = 0;
//   let numSr = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return (numSr = sum / arr.length);
// }
// console.log(n(arr1));

// const sayName = function (name) {
//   return name;
// };
// console.log(sayName("Alex"));

// test();
// function test() {
//   console.log("test");
// }

// const test2 = function () {
//   console.log("test");
// };
// test2();

// const arrowFn = () => console.log("!!!");
// const test1 = (name, age) => console.log(name, age);

// const repeat = (str, n) => {

//   for (let i = 0; i < n; i++) {

//     console.log(str)
//   }

// };
// console.log(repeat("tor", 3));

// const getlette = (lette) => {
//   if (lette === "a" || "у" || "е" || "о" || "я" || "и" || "ю") {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(getlette("e"));

// let str = "rttr";
// const palindrom = () => {
//   let str2 = str.split("").reverse().join("");
//   if (str === str2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// palindrom();

// let str = "rttr";
// const palindrom2 = () => {
//   let str2 = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     str2 += str[i];
//   }
//   //   console.log(str2);
//   if (str === str2) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(palindrom2());
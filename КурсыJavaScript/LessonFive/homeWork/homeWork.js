//              Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

square = (num) => num ** 2;
console.log(square(2));

// ИЛИ 

square1 = (n) => Math.pow(n, 2) 
console.log(square1(2));


//          Сделайте функцию, которая возвращает сумму двух чисел.

sum = (a, b) => a + b;
console.log(sum(2, 5));


//          Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function check (a, b, c){
    g = a - b;
    g = g / c;
}
console.log(check(8, 4, 2))


//             Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.


function week(number) {
    number >= 1 && number <= 7;
    day = [ "", "Пн","Вт","Ср","Чт","Пт","Сб","Вскр",]
    console.log(day[number]);
}
week(5)


//Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function truefalse(a , b) {
    if (a === b){
        console.log("true");
    }else{
        console.log("false");
    }
}
truefalse(2, 2)


// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function truefalse2(a, b){
    if (a + b > 10){
        console.log("true");
    }else{
        console.log("false");
    }
}
truefalse2(2, 3)


// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function check2(a) {
    if (a < 0){
        console.log("true");
    }else{
        console.log("false");
    }
}
check2(-3)


// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange(a) {
    if (a > 0 && a < 10){
        console.log("true");
    }else{
        console.log("false");
    }
}
isNumberInRange(-2)


//Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

arr = [2, 5, 12, 0, 1, 7,-9];
isNumberInRange = (num) => (num > 0 && num < 10 ? true : false);
function newArr (arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isNumberInRange(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
};
console.log(newArr(arr));

//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum (digit) {
   let num = 0;
   digit = String(digit);
   for (let i = 0; i < digit.length; i += 1) {
        num += +digit[i];
    }
    return num;
}
console.log(getDigitsSum(123));

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
function getDigitsSum (digit){
  let num = 0;
  digit = String(digit);
  for (let i = 0; i < digit.length; i += 1) {
    num += +digit[i];
  }
  return num;
};

function getSum13 (){
  let nums = [];
  for (let i = 0; i < 2020; i += 1) {
    if (getDigitsSum(i) === 13) {
      nums.push(i);
    }
  }
  return nums;
};
console.log(getSum13());

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
const isEven = (num) => (num % 2 === 0 ? true : false);
console.log(isEven(4));


// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).
function getDivisors (num){
  let arr = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(getDivisors(1000000));

//  Дан массив с числами. Выведите последовательно его элементы.
let arr1 = [10, 1, 8, 3, 12, 4, 6];
function arrRecurs (arr){
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
  return "это весь массив";
};
console.log(arrRecurs(arr1));

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function getDigitsSum (digit){
  let num = 0;
  digit = String(digit);
  for (let i = 0; i < digit.length; i += 1) {
    num += +digit[i];
  }
  return num;
};

function getLessNime (num) {
  while (num > 9) {
    num = getDigitsSum(num);
  }
  return num;
};
console.log(getLessNime(12345));
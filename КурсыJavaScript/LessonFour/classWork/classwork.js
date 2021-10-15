// if(false) {      //Блок с false не выполнится 
//     console.log("")
// }

// if(true) {       //Блок с true выполняется
//     console.log("написало");  
// }


// const example = 10

// if (example > 11){    //Эта часть проигнорируется 
//     console.log("False");
// }else if (example == 9){     //Эта часть тоже проигнорируется 
//     console.log("False");
// }else{
//     console.log("True");
// }

// // ? Тернарный оператор if и : else
// let tern = 3;
// let ternResult = tern > 5 ? "True" : "False";
// console.log(ternResult);

// //Switch является, чем-то на подобии if, но благодаря нему можно ускорить работу выполнения кода
// switch(tern) {
//     case 2:
//         console.log("2");
//         break;
//     case 4:
//         console.log("4");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     default:
//         console.log("rn");  
// }


line1 = 10
line2 = 50
line3 = 65

if (line1 > line2 & line1 > line3){
    console.log(line1);
}else if (line2 > line1 & line2 > line3){
    console.log(line2);
}else{
    console.log(line3);
}

tempToday = 20

if (tempToday > 5 & tempToday < 15){
    console.log("Тепло");
}else if (tempToday < -30){
    console.log("Оставайтесь дома!");
}else if (tempToday > -30 & tempToday < -10){
    console.log("Сегодня холодно");
}else if (tempToday > -10 & tempToday < 5){
    console.log("Не холодно");
}else if (tempToday > 15 & tempToday < 25){
    console.log("Очень тепло");
}else if (tempToday > 5 & tempToday < 15){
    console.log("Жарко");
}else if (tempToday > 25 & tempToday < 35){
    console.log("Пекло");
}else{
    console.log("error");
}

let member ="admin"

switch (member) {
    case "moderator":
        console.log("наш модератор любит печенье");
        break;
    case "admin":
        console.log("наш админ очень добрый");
        break;
    case "manager":
        console.log("наш менеджер очень классный человек");
        break;
    default:
        console.log("роль не найдена");
}
// || - это или
let i = 0

do{
    console.log("start");
}while(false){
    console.log("stop");
}

for(let i = 0; i <= 3; i++){
    console.log("i = " + i);
}
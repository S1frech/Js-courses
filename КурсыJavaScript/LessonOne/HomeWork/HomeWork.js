console.log ('Hello World')

const string = ("строка")

const number = 2021

const boolean = 5 < 4 

const Null = null

const bigInt = 1234567890123456789012345678901234567890n

let Undefind;
 
const object2 = {firstName: "Egor", secondName: "Lyadov"}

let symbol = Symbol()

console.log (string, number, boolean, Null, bigInt, Undefind, object2, symbol)

arr = [string, number, boolean, Null, bigInt, Undefind, object2, symbol]


function Typeof(){
    console.log(typeof string)
    console.log(typeof boolean)
    console.log(typeof number)
    console.log(typeof Null)
    console.log(typeof bigInt)
    console.log(typeof Undefind)
    console.log(typeof object)
    console.log(typeof symbol)
}
Typeof()

try {
    number = 2020
    console.log("изменить можно")
} catch(err) {
    console.log("не получилось, увы (")
}

try {
    object2 = "теперь не объект"
    console.log("изменить можно")
} catch(err) {
    console.log("не получилось, увы (")
}

let object1 = {firstName: "Egor", secondName: "Lyadov"}

try {
    object1 = "теперь не объект"
    console.log("изменить можно")
} catch(err) {
    console.log("не получилось, увы (")
}

var object3 = {firstName: "Egor", secondName: "Lyadov"}

try {
    object3 = "теперь не объект"
    console.log("изменить можно")
} catch(err) {
    console.log("не получилось, увы (")
}

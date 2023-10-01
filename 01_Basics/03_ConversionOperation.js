// conversion of datatypes

// let score = "nsdf";
// let score = undefined
// let score = null
// let score = true //1
let score = 34 //34

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log( (valueInNumber));


let isLoggedIn=""
let bool = Boolean(isLoggedIn)
console.log(bool)
// 1 => true; 0 =>false
// "" >false
// "bob" => true

let someNumber = 99
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log( typeof stringNumber)

// ****************operations******************//

let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 ="hello"
let str2 = "dk"

let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+ 2 + 2);
console.log(1+ 2 + "2");

console.log(((3+4)*5)%3)

console.log(true) // true
console.log(+true) //1
console.log(+"") //0
// console.log(true+) // errror

let num1,num2,num3 
num1= num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
// ++gameCounter; // prefix operator 
console.log(gameCounter);

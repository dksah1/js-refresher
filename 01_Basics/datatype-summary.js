// primitive type

// 7types : String,number,Boolean,null,undefined,symbol,bigint

// const score =100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;

const id = Symbol('123')
console.log(id)
const anotherId = Symbol('123')
console.log(anotherId)
console.log(id === anotherId )


const  bigNumber = 843756345345748n //bigint

// reference(non primitive)
//  Array ,objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"hitesh labh",
    age:44,

}

const myFun = function () {
console.log("Hello world")  
}
myFun();
console.log(typeof anotherId);


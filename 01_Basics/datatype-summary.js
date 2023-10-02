// // primitive type

// // 7types : String,number,Boolean,null,undefined,symbol,bigint

// // const score =100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outSideTemp = null
// // let userEmail;

// const id = Symbol('123')
// console.log(id)
// const anotherId = Symbol('123')
// console.log(anotherId)
// console.log(id === anotherId )


// const  bigNumber = 843756345345748n //bigint

// // reference(non primitive)
// //  Array ,objects, Functions

// const heros = ["shaktiman","naagraj","doga"]

// let myObj = {
//     name:"hitesh labh",
//     age:44,

// }

// const myFun = function () {
// console.log("Hello world")  
// }
// myFun();
// console.log(typeof anotherId);

// ************memoery*********************//
// stack memory(primitive){copy milta hai },heap memory(non-primitive) {refernece milta hai}

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chai aur code"
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"user@gmail.com",
    upi:"urse@23",
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// array

const myArr = [1,2,3,4,5,6]

const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);


// array method

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) //add values at the first index only
// myArr.shift() //delete the values from the first index only

// console.log(myArr.includes(5)); //this returns the boolean values 
// console.log(myArr.indexOf(2)); give the index no. of an element of an array 
console.log(myArr);

// const newArr = myArr.join() // adds all the elements of an array into string
// console.log(newArr);
// console.log(myArr);


// slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

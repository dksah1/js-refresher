// array

const myArr = [1,2,3,4,5,6]

const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[0]);


// array method part 1

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

// array method part2 


// slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2= myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


// array method part3

// const marvel_heros = ["thor","Ironman","spiderman"]
// const dc_heros= ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
 

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(...real_another_array,"end");


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Hitesh"})) //intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

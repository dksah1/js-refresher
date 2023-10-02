const name ="hitesh"
const repoCont = 50

// console.log(name +  repoCont+ "value")

console.log(`hello my name is ${name} and my repo count is ${repoCont}`);

const gameName = new String('histhe-dc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStrig = gameName.slice(-8,4)
console.log(anotherStrig);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hiteshca%30ghj"
console.log(url.replace('%30','-'))
console.log(url.includes('hitesh'))

console.log(gameName.split('-'))
// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element === 5){
//         console.log("5 is the best number")
//     }
//     console.log(element);
    
// }

// console.log(element); // throw error because it is out of scope

for (let i = 1; i < 10; i++) {
    //   console.log(`multiplication table of  ${i} `)    
    for (let j = 1; j < 10; j++) {
    // console.log(`inner loop ${j} and inner loop ${i} `)
    // console.log(i + '*' + j + ' = ' + i*j )
}    
}

let myArray = ["flash","batman","superman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


// break and continue

// for (let i = 0; i <=20; i++) {
//     if(i === 5){
//         console.log("5 detected")
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }

for (let i = 0; i <=20; i++) {
    if(i === 5){
        console.log("5 detected")
        continue;
    }
    console.log(`value of i is ${i}`)
}

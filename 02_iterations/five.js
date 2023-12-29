const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map((num)=>num +10)

// const newnums = mynums.map((num)=>num *10 ).map((num)=> num+2)
// console.log(newnums);

const myTotal = mynums.reduce((acc,currval)=>{
    console.log(`acc:${acc} currval : ${currval}`);
    return acc + currval
}, 0)

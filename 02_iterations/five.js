
// map functions
const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.map((num)=>num +10)
// const newnums = mynums.map((num)=>num *10 ).map((num)=> num+2)
// console.log(newnums);

// reduce functions

// const myTotal = mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = mynums.reduce((acc,currval)=> acc* currval,1)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js cousre",
        price:2000
    },
    {
        itemName:"python cousre",
        price:2900
    },
    {
        itemName:"data science cousre",
        price:39000
    },
]
const prcieTopay= shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(prcieTopay);




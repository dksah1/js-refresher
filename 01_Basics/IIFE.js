// immediately invoked function expression
(function chai (){
    console.log(`db connected`);
})();


( (name) =>{
console.log(`Db connected two ${name}`)
} )('hitesh') // global scope ke pollution ko hatane ke liye IIFE ka use kiya jata hai


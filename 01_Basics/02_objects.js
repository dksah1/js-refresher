// const tinderUser = new Object () // singleton object
 const tinderUser = {} //non singleton object
tinderUser.id = "123wef"
tinderUser.name = "sam"
tinderUser.isLoggedin = false 

//  console.log(tinderUser)

const regularUser = {
    email:"dfgh@gmail.com",
    fullname: {
        userfullname:{
            firstname:"boby",
            lastname:"das"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj4 ={5:"f", 6:"g"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)
 
const obj3 = {...obj1,...obj2}
console.log(obj3)


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "js in development",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);



// api format

// {
//   "  name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free",
// }

[
    {},
    {},
    {}
]
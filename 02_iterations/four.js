// const coding  = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
// // console.log(item);
// return item
// })

// console.log(values);



// const mynums = [1,2,3,4,5,6,7,8,9,10]

//  let newnums = mynums.filter((num)=>{ 
//     return num > 4
//   })

// same woek using for each
//   const newnums = []
//   mynums.forEach((num)=>{
//     if (num > 4) {
//         newnums.push(num)
//     }
//   })
// console.log(newnums);

let books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationYear: 1960,
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      publicationYear: 1949,
      genre: "Dystopian Fiction"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationYear: 1925,
      genre: "Fiction"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publicationYear: 1813,
      genre: "Romance"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationYear: 1951,
      genre: "Fiction"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publicationYear: 1937,
      genre: "Fantasy"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      publicationYear: 1932,
      genre: "Dystopian Fiction"
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publicationYear: 1954,
      genre: "Fantasy"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      publicationYear: 1988,
      genre: "Fantasy"
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      publicationYear: 1950,
      genre: "Fantasy"
    }
  ];
  let userBooks = books.filter((bk)=> bk.genre === 'Fantasy' )
 userBooks = books.filter((bk)=> bk.publicationYear >="1990")
  console.log(userBooks);
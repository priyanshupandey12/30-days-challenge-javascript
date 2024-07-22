//activity-1:creation of object

const book={};
book.title="Naruto";
book.author="Kishmoto";

console.log(`the book author name is ${book.author} of ${book.title}`)//the book author name is Kishmoto of Naruto
//  <---------*******-------->


//activity-2:object methods
// Task 3
let book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  // Method that returns a string with the book's title and author
  getTitleAndAuthor: function() {
      return `${this.title} by ${this.author}`;
  }
};
console.log(book1.getTitleAndAuthor()); // Logs: "The Great Gatsby by F. Scott Fitzgerald"

// Task 4
// Method that takes a parameter (year) and updates the book's year property
book1.updateYear = function(newYear) {
  this.year = newYear;
};

book1.updateYear(2021);
console.log(book1.year); // Logs: 2021

//activity-3:nested object

let library = {
    name:'kyun nhi ho rahi padai',
  books: [
      { title: "1984", author: "George Orwell" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "The Catcher in the Rye", author: "J.D. Salinger" }
  ]
};
console.log(library); // {
 // books: [
 //   { title: '1984', author: 'George Orwell' },
 //   { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
 //   { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
//  ]
//}

console.log(`library name is :${library.name} and the boooks name are:${library.books[0].title}`)//library name is :kyun nhi ho rahi padai and the boooks name are:1984
library.books.forEach(book => {
  console.log(book.title); // Logs the title of each book in the library
});

// Task 7
// Method that uses `this` keyword to return a string with the book's title and year
book1.getTitleAndYear = function() {
  return `${this.title} (${this.year})`;
};

console.log(book1.getTitleAndYear()); // Logs: "The Great Gatsby (2021)"

// Task 8
// Use a for...in loop to iterate over the properties of the book object and log each property and its value

const book3={
  title:"madara",
  author:"moni",

}
for(let key in book3) {
  if(book3.hasOwnProperty(key)) {
    const keys=key
    const value=book3[key];
   console.log(`the keys are:${keys} and the value are:${value}`);
   /* the keys are:title and the value are:madara
      the keys are:author and the value are:moni    */
   
  }
}
console.log(Object.keys(book3));//[ 'title', 'author' ]
console.log(Object.values(book3));//[ 'madara', 'moni' ]
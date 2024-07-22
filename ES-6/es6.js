/*Activity 1: Template Literals
Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.  */

let name='Priyanshu';
let age=20
// Using template literals to create a string
let boyInfo=`the student name is :${name} and the age is :${age}`

console.log(boyInfo);

//Task 2: Create a multi-line string using template literals and log it to the console.
// Creating a multi-line string using template literals
const multiLineString = `me bhi naachu
sun sathiyaa maahiyaa barsa de
teri deewani dewaani `;

// Logging the multi-line string to the console
console.log(multiLineString);


/*Activity 2: Destructuring
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.  */

const array=[1,2,3,4,5];
// Using array destructuring to extract the first and second elements
const [first,second]=array;
console.log(first); // Output: 1
console.log(second); // Output: 2

//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

 const book={
  title:'Mha',
  author:"br"
 }
// Using object destructuring to extract title and author
 const {title,author}=book;
 console.log(`the author is ${author} and the book written by him is ${title}`);
 // Output is ::the author is br and the book written by him is Mha




 /*Activity 3: Spread and Rest Operators
Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. */


const array1=[1,2,3,4,5];
// Using the spread operator to create a new array with additional elements
const newArray=[...array1,6,7];

console.log(newArray)// Output: [1, 2, 3, 4, 5, 6,7]


//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
  return numbers.reduce((prev,curr)=>prev+curr,0);
}

console.log(sum(4,5,6,6,6,7,7,7));//48

/*Activity 4: Default Parameters
Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. */

function product(a,b=1) {
  return a*b;
}
console.log(product(4));//4

/* Activity 5: Enhanced Object Literals
Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. */

// Creating an object using enhanced object literals
const person = {
  name: "Madara",
  age: 25000,
  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log(person);//{ name: 'Madara', age: 25000, greet: [Function: greet] }
person.greet(); //Hello, my name is Madara

//Task 9: Create an object with computed property names based on variables and log the object to the console.

// Variables for computed property names
const propName = "dynamicProperty";
const propValue = "This is a dynamic property";

// Creating an object with computed property names
const dynamicObject = {
  [propName]: propValue
};

// Logging the object to the console
console.log(dynamicObject); // Output: {dynamicProperty: "This is a dynamic property"}

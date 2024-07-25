


//activity-1:creating and exporting module
//task1:create a function that takes two numbers and returns their sum
function addtwonumber(a,b){
  return a+b;
}

const person={
  name:"madara",
  lastname:"uchiha",
  age:25000,
  movieLover:['kimi no na wa','kimi no na wa','kimi no na wa'],
   fullname() {
     return `${this.name} ${this.lastname}`
   }
     
}



export  {addtwonumber,person};

//activty-2:named and default export


//Task 3: Create a module that exports multiple functions using named exports.
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
//Task 4: Create a module that exports a single function using default export.
export default function multiply(a, b) {
  return a * b;
}



//activity-3:Importing Entire Modules

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object.



// Constants
export const PI = 3.14159;
export const E = 2.71828;

// Functions
export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}





//activity-1:basic error handling

// Task 1: Function that throws an error and uses try-catch to handle it

function throwerror(){
  throw new Error("a error is found")
}

try {
  throwerror();
} catch (error) {
    console.log("Error caught :",error.message)
}

// Task 2: Function that divides two numbers and handles division by zero

function dividend(a,b) {
  if(b==0) {
    throw new Error("Cannot divide by zero.")
  }
  return a/b;
}

try {
  const result=dividend(4,0);
  console.log("Result: ", result);
} catch (error) {
  console.error("Error caught: ", error.message);
}

//Activty-2:finallyblock


// Task 3: Script with try-catch-finally block

function finallyBlock () {
  try {
    console.log("Try block executed.");
        throw new Error("Error in try block.");
  } catch (error) {
    console.error("Catch block executed: ", error.message);
  }
  finally{
    console.log("Finally block executed.");
  }
}

finallyBlock();


//Activity 3: Custom Error Objects


// Task 4: Custom error class


class CustomError extends Error {
  constructor(message) {
      super(message);
      this.name = "CustomError";
  }
}

function throwError() {
  throw new CustomError("This is a custom error.");
}

try {
  throwError();
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}


// Task 5: Function that validates user input and throws a custom error

class ValideateError extends Error {
  constructor(message) {
    super(message);
    this.name="validate error"
  }
}

 function ValidateInput (input) {
  if(input.trim()==="") {
    throw new ValideateError("Input cannot be empty.")
  }
  return true;
 
 }

 try {
   ValidateInput("")
 } catch (error) {
  
  console.error(`${error.name}: ${error.message}`);
 }


 //Activity 4: Error Handling in Promises

 // Task 6: Create a promise that randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      success ? resolve("Promise resolved!") : reject(new Error("Promise rejected!"));
  });
}

randomPromise()
  .then(result => console.log(result))
  .catch(error => console.error("Error caught: ", error.message));



  // Task 7: Using try-catch within an async function to handle promise errors


  async function handlePromise() {
  try {
      const result = await randomPromise();
      console.log(result);
  } catch (error) {
      console.error("Error caught: ", error.message);
  }
}

handlePromise();



//Activity 5: Graceful Error Handling in Fetch

// Task 8: Using fetch to request data from an invalid URL and handle the error using .catch()

fetch('https://invalid.url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error caught: ", error.message));




// Task 9: Using fetch to request data from an invalid URL within an async function and handle the error using try-catch
async function fetchData() {
    try {
        const response = await fetch('https://invalid.url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error caught: ", error.message);
    }
}

fetchData();

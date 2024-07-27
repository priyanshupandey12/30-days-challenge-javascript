
//acitvity-1:understanding closures
//task1
function outerFunction() {
  let outerVariable = 'Hello, World!';
  
  function innerFunction() {
      return outerVariable; // Accessing outerVariable from the outer function's scope
  }
  
  return innerFunction;
}

const func = outerFunction();
console.log(func()); //  'Hello, World!'


//task2
function createCounter() {
  let counter = 0;
  
  return {
      increment: function() {
          counter++;
      },
      getValue: function() {
          return counter;
      }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue()); //  3

//Activity 2: Practical Closures
//Task 3-Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
  let lastId = 0;
  
  return function() {
      lastId++;
      return lastId;
  };
}

const generateUniqueId = createUniqueIdGenerator();
console.log(generateUniqueId());
console.log(generateUniqueId())
console.log(generateUniqueId()); 


//Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(name) {
  return function() {
      return `Hello, ${name}!`;
  };
}

const greet= greetUser('Priyanshu');
console.log(greet()); // Logs 'Hello, Priyanshu!'


//Activity 3: Closures in Loops
function createFunctionArray() {
  const funcs = [];
  
  for (let i = 0; i < 5; i++) {
      funcs.push((function(index) {
          return function() {
              console.log(index);
          };
      })(i));
  }
  
  return funcs;
}

const functionArray = createFunctionArray();
functionArray[0](); // Logs 0
functionArray[1](); // Logs 1
functionArray[2](); // Logs 2

//Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemModule = (function() {
  const items = [];
  
  return {
      addItem: function(item) {
          items.push(item);
      },
      removeItem: function(item) {
          const index = items.indexOf(item);
          if (index > -1) {
              items.splice(index, 1);
          }
      },
      listItems: function() {
          return items.slice(); // Return a copy of the items array
      }
  };
})();

itemModule.addItem('apple');
itemModule.addItem('banana');
console.log(itemModule.listItems()); // Logs ['apple', 'banana']
itemModule.removeItem('apple');
console.log(itemModule.listItems()); // Logs ['banana']


//Activity 5: Memoization

//Write a function that memoizes the results of another function. Use a closure to store the results of previous computations

function memoize(fn) {
  const cache = {};
  
  return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key] !== undefined) {
          return cache[key];
      } else {
          const result = fn(...args);
          cache[key] = result;
          return result;
      }
  };
}

const slowFunction = (num) => {
  // Simulate a slow computation
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
};

const fastFunction = memoize(slowFunction);
console.log(fastFunction(5)); // Computes result
console.log(fastFunction(5)); // Returns cached result


//Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
  if (n <= 1) {
      return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs 120
console.log(memoizedFactorial(6)); // Logs 720

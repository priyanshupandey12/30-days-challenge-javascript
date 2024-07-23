//activity-1:Understanding promises


// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const resolvePromise=new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("Promise resolved after 2 seconds");
  },2000);

})

resolvePromise.then((message)=>{
console.log(message)  // Output: Promise resolved after 2 seconds
})


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const rejectPromise=new Promise((_,reject)=>{
  setTimeout(()=>{
    reject("Promise rejected after 2 seconds");
  },2000);
})

rejectPromise.catch((error)=>{
    console.error(error) // Output: Promise rejected after 2 seconds
}) 


// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData=new Promise((resolve)=>{
  setTimeout(()=>{
     resolve("Data is Fetched");
  },1000)
})
const processData = () => new Promise((resolve) => setTimeout(() => resolve("Data processed"), 1000));
const displayData = () => new Promise((resolve) => setTimeout(() => resolve("Data displayed"), 1000));

fetchData  //yah function nhi islie callbsck() nhi lagaya
    .then((message) => {
        console.log(message); // Output: Data fetched
        return processData();
    })
    .then((message) => {
        console.log(message); // Output: Data processed
        return displayData();
    })
    .then((message) => {
        console.log(message); // Output: Data displayed
    });


// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const waits=async()=>{
    const promise= await new Promise((resolve)=>{
      setTimeout(() => resolve("Async/Await resolved after 2 seconds"), 2000);
    })
    console.log(promise)
}

waits();



// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
 

const trycatchasync=async()=>{
    try {
       const promise=await new Promise((_,reject)=>{
              reject("reject he promise")
       })
     } catch (error) {
        console.error(error)
     }
      
    }

  trycatchasync();



// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://zenquotes.io/api/today')
.then((response)=>response.json())
.then((data)=>console.log(data))//"When you're curious, you find lots of interesting things to do.",
.catch((error) => console.error('Error fetching data:', error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchJoke=async()=>{
  try {
    const response=await fetch("https://zenquotes.io/api/random");
    const data=await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

fetchJoke();


// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 3000));

Promise.all([promise1,promise2,promise3])
     .then((values)=>{
      console.log(values)//[ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
     })


  
     
 // Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
 
 Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // Output: Promise 1 resolved
    });
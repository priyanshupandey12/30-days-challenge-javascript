//acitvity-1:Understanding-local storage

//task1:Write a scirpt that save s string   value to local storage and retrieve it.

//--->>Save Data to Local Storage
//localStorage.setItem("key", "value");

const data=document.querySelector('#data');


localStorage.setItem("name","priyanshu");
//-->>Read Data from Local Storage

const getlocal=localStorage.getItem("name");

data.textContent=getlocal;



//task-2 write a script that save an object to local storage by converting into a JSON string and parse the object.

const student={
  name:"Priyanshu Pandey",
  age:21,
  learning:["html","css","js"]
};
// Convert the object to a JSON string
localStorage.setItem("student",JSON.stringify(student));
 // Save the JSON string to local storage
const jsonstring=localStorage.getItem("student");
// Parse the JSON string back into an object
const json=JSON.parse(jsonstring);
data.textContent=json.learning


//activity-2 using localstorgge

//task3

const userdata=document.querySelector('#userForm');

userdata.addEventListener('submit' ,(e)=>{
  e.preventDefault();
  const name=document.querySelector('#name').value
  const email=document.querySelector('#email').value
  //localStorage.setItem('name',name);
  //localStorage.setItem('email',email);
  localStorage.setItem("data",JSON.stringify({name,email}));

  displayData();
})



 const displayData=()=>{

  const display=JSON.parse(localStorage.getItem("data"));

  if(display){
    const data=document.querySelector('#displayData');
    data.textContent=`Name: ${display.name} and E-Mail: ${display.email}`;
  
 }
}

displayData();

// Task 4: Remove an item from localStorage

console.log('localStorage before removal:', localStorage); 
localStorage.removeItem('data');
console.log('localStorage after removal:', localStorage);


// Activity 3: Understanding SessionStorage

// Task 5: Save and retrieve a string value from sessionStorage

sessionStorage.setItem('myString', 'Hello, SessionStorage!'); // Save string to sessionStorage
const retrievedString = sessionStorage.getItem('myString'); // Retrieve string from sessionStorage
console.log('Retrieved string:', retrievedString); // Output: "Hello, SessionStorage!"


// Task 6: Save and retrieve an object from sessionStorage

const person={
  name:"priyanshu",
  age:21,
  movies:["kill","maharaja"]
};

sessionStorage.setItem("persom",JSON.stringify(person));
const getinfo=JSON.parse(sessionStorage.getItem("persom"));
console.log(getinfo);



 // Task 7: Create a form that saves user input to sessionStorage

 const userform = document.querySelector('#userForm1');
 userform.addEventListener('submit', (e) => {  // 'submit' was misspelled as 'sumbit'
     e.preventDefault();
     const name = document.querySelector('#name1').value;
     const email = document.querySelector('#email1').value;
     sessionStorage.setItem("userinfo", JSON.stringify({name, email}));
     displayinfo();
 });
 
 const displayinfo = () => {
     const getinfo = JSON.parse(sessionStorage.getItem("userinfo"));
     if (getinfo) {
         const data = document.querySelector('#displayData1');
         data.textContent = `Name: ${getinfo.name} 
         and E-Mail: ${getinfo.email}`;
     }
 };
 
 displayinfo();


 console.log("before removal:", sessionStorage);
 sessionStorage.removeItem("userinfo");
 console.log("after removal:", sessionStorage);


 //acitvity-5:Local Storage and Session Storage comparison

// Task 9: Save value to both localStorage and sessionStorage
function saveToStorages(key, value) {
  localStorage.setItem(key, value); // Save to localStorage
  sessionStorage.setItem(key, value); // Save to sessionStorage
  
  // Retrieve and log values
  console.log('localStorage value:', localStorage.getItem(key));
  console.log('sessionStorage value:', sessionStorage.getItem(key));
}

saveToStorages('myKey', 'myValue'); 


function clearAllStorages() {
  localStorage.clear(); // Clear all items from localStorage
  sessionStorage.clear(); // Clear all items from sessionStorage
  
  // Verify that both storages are empty
  console.log('localStorage is empty:', Object.keys(localStorage).length === 0);
  console.log('sessionStorage is empty:', Object.keys(sessionStorage).length === 0);
}

clearAllStorages();
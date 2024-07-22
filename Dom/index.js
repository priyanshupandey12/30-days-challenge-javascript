//activity-1:selecting and manioulating element

const title=document.getElementById('title').innerHTML="world"

const stycolor=document.querySelector('.change');
stycolor.style.backgroundColor='red';




//acitivty-2:creating and appending elemnt




// Task 3: Create a new div element with some text content and append it to the body.
const div=document.createElement('div').textContent="add krdiya"
document.body.append(div);


// Task 4: Create a new li element and add it to an existing ul list.
const li=document.createElement('li');
li.innerText="kalki";
const existUl=document.querySelector('.movies');
existUl.appendChild(li);



//activity-3:removing element


// Task 5: Select an HTML element and remove it from the DOM.
const remove=document.querySelector('#del');

remove.parentNode.removeChild(remove)
// Task 6: Remove the last child of a specific HTML element.
existUl.removeChild(existUl.lastElementChild);


//activity-4:Modifying element


// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const img1=document.querySelector('.img1')
img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6heoi_pAwutfXxU8Cdh7EcazRk3rgQcx7JQ&s"



// Task 8: Add and remove a CSS class to/from an HTML element.

const change=document.querySelector('.change-color');
change.classList.add('change-color');

setTimeout(()=>{
  change.classList.remove('change-color')
})



//activity-5:event Handling


// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button=document.querySelector('#clickme')

button.addEventListener('click',function(){
   button.textContent="tu bhi badal gya"
})


// Task 10: Add a mouseover event listener to an element that changes its border color.
const dekho=document.querySelector('.dekhte');

dekho.addEventListener('mouseover',function(){
  dekho.style.borderColor="red";
})
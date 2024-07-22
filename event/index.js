//activty-1:basic event handling
  // Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const changeContext=document.querySelector('#btn-text');

changeContext.addEventListener("click",()=>{
  changeContext.textContent="you just changed me"
})

  // Task 2: Add a double-click event listener to an image that toggles its visibility.
const changeContext1=document.querySelector('#btn2-text');
changeContext1.addEventListener("dblclick",()=>{
  changeContext1.style.visibility="hidden"
},false)

//activty-2:Mouse event handling
const mousekakhel=document.querySelector('.tubhi');
mousekakhel.addEventListener("mouseover",()=>{
  mousekakhel.classList.add('tubhi')
})

//Task 4: Adds a mouseout event to the same element to reset the background color by removing the CSS class.
mousekakhel.addEventListener("mouseout",()=>{
  mousekakhel.classList.remove('tubhi')
})


//activity-3:Keyboard event



const input=document.querySelector("#dhanraasi")
const action=document.querySelector('#keypresskebaddyha')
///Task 5: Logs the key pressed in an input field to the console using a keydown event.
input.addEventListener("keydown",(e)=>{
   action.textContent+=`${e.key}`;
})
//Task 6: Displays the current value of the input field in a paragraph using a keyup event.
input.addEventListener("keyup",(e)=>{
  action.textContent+=`${e.key}`;
})

//activity-4:form event
//Task 7: Prevents form submission and logs the form data using a submit event.
const here=document.querySelector('.here');


here.addEventListener("click",(e)=>{
    e.preventDefault();
    
})
//Task 8: Displays the selected value from a dropdown in a paragraph using a change event.
const log=document.querySelector('#log');
const dropdown=document.querySelector('#dropdown')

dropdown.addEventListener('change',(e)=>{
  log.textContent=`${e.target.value}`
})


//acitvity-5:event delagation


//Task 9: Logs the text content of the clicked list item using event delegation.
const list=document.querySelector('.list');
const log1=document.querySelector('#log1');

list.addEventListener('click',(e)=>{
   if(e.target.tagName==='LI') {
    console.log(`item clicked :${e.target.textContent}`)
    log1.textContent=`${e.target.textContent}`
   }
})

//Task 10: Adds an event listener to a parent element to handle events from dynamically added child elements.
const button=document.querySelector('#parentElement');

button.addEventListener("click",(e)=>{
 
    const newChild = document.createElement('div');
    newChild.textContent = 'New Child';
    button.appendChild(newChild);

})
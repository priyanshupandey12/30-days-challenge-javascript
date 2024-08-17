const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('date');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const newlist = document.getElementById('task');
const task = [];
let editingIndex = null; // To keep track of the task being edited

// Function to update a task in the array
function updateTaskInArray(index, updatedTask) {
  task[index] = updatedTask;
  localStorage.setItem('task', JSON.stringify(task)); // Save to local storage
  displayData(); // Refresh the task list display
}

// Function to populate the form with task details for editing
function populateForm(index) {
  const taskToEdit = task[index];
  title.value = taskToEdit.title;
  description.value = taskToEdit.description;
  date.value = taskToEdit.date;
  editingIndex = index; // Set the index of the task being edited
}

// Function to handle the edit button click
function handleEditClick(event) {
  const index = parseInt(event.target.getAttribute('data-index'), 10);
  populateForm(index);
}

// Function to handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  const newTask = {
    title: title.value,
    description: description.value,
    date: date.value
  };

  if (editingIndex !== null) {
    // Update existing task
    updateTaskInArray(editingIndex, newTask);
    editingIndex = null; // Reset the editing index
  } else {
    // Add new task
    task.push(newTask);
    localStorage.setItem('task', JSON.stringify(task)); // Save to local storage
    displayData(); // Refresh the task list display
  }

  form.reset(); // Clear the form
}

// Function to display tasks
function displayData() {
  newlist.innerHTML = '';

  task.forEach((taskItem, index) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const titleElement = document.createElement('h3');
    titleElement.textContent = `Title: ${taskItem.title}`;
    taskContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Description: ${taskItem.description}`;
    taskContainer.appendChild(descriptionElement);

    const dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${taskItem.date}`;
    taskContainer.appendChild(dateElement);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('data-index', index); // Set the index for editing
    editButton.addEventListener('click', handleEditClick);
    taskContainer.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('data-index', index); // Set the index for deletion
    deleteButton.addEventListener('click', (e) => {
      const indexToDelete = parseInt(e.target.getAttribute('data-index'), 10);
      task.splice(indexToDelete, 1);
      localStorage.setItem('task', JSON.stringify(task)); // Save to local storage
      displayData(); // Refresh the task list display
    });
    taskContainer.appendChild(deleteButton);

    newlist.appendChild(taskContainer);
  });
}

// Event listener for form submission
form.addEventListener('submit', handleFormSubmit);

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('task'));
  if (savedTasks) {
    savedTasks.forEach(taskItem => task.push(taskItem));
    displayData();
  }
});

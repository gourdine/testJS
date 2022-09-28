// UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load event listeners
loadEventListeners();

// event listeners functions
function loadEventListeners(){
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click',removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('keyup',filterTasks);
}

// get task from LS
function getTasks(){
  let tasks;
  // check local storage
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else {
    // local storage can only store strings, need to parse
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    // create li element
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create new link element
    const link = document.createElement('a');
    // add class for link
    link.className= 'delete-item secondary-content';
    // add icon delete
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li)
    });
}

// remove from LS
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  // check local storage
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else {
    // local storage can only store strings, need to parse
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  })

  localStorage.setItem('tasks',JSON.stringify(tasks));

}

// add task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class for link
  link.className= 'delete-item secondary-content';
  // add icon delete
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li)

  // store in localStorage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task){
  let tasks;
  // check local storage
  if (localStorage.getItem('tasks') === null){
    tasks = [];
  }
  else {
    // local storage can only store strings, need to parse
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // adding to the array
  tasks.push(task);
  // need to be stored as a string
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// delete task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target)
    if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();

    // remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }

  e.preventDefault();
}

// clear task
function clearTasks(){

  // taskList.innerHTML = '';

  // faster to loop
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // clear from LS
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

// filter tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  // forEach returns nodeList
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLocaleLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }else{
        task.style.display = 'none';
      }
    }
  );
  e.preventDefault();
}












// // Define UI Vars
// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);
// }

// Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }
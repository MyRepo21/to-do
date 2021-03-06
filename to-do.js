/*
create task input field, button HTML
? create an unordered list as a placeholder in HTML?  or create in JS only when button clicked?
get task (on button click)
  create list element for task li   
    add task to task list (append)
  clear task input field
delete task 

mark task complete
*/

const taskList = document.getElementByID("taskList");
const addButton = document.querySelector("#addButton");

function getTask(e) {

    e.preventDefault();

    var task = document.getElementById("task").value;
    taskList.appendChild(task);
  
  }
  const taskInput = document.getElementById("taskInput");
  addButton.addEventListener("click", getTask);
  


  



    


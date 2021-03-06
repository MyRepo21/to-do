/*
create task input field 
create addButton
? create an unordered list as a placeholder in HTML?  or create in JS only when button clicked?
get task (on button click) getElementByID
  create list element for task li  createElement 
    add task to task list appendChild
      with each task include inline doneButton and deleteButton
        on doneButton click, change task style to strikethrough
        on deleteButton click, remove task from list
  clear task input field

mark task complete
*/

/* 
function getTask(e) {
    e.preventDefault();
    addButton.addEventListener("click", getTaskSubFcn()) {
      getTaskSubFcn {}
    };
    */


function getTask(e) {
    e.preventDefault();
         if (task = " ") {
         alert("Please enter a task.");
       }

    let taskList = document.createElement("li");
    let taskListItem = taskList.appendChild(task).innerHTML;
    document.getElementById("task").value = "";
   }

  function markTaskDone() {
       let task.style.textDecoration = "line-through";

  }

  function deleteTask() {
    taskList.removeChild("task");
  }

  let task = document.getElementById("task").value; 
  const taskList = document.createElement("taskList");
  const addButton = document.getElementByID("addButton");
  const doneButton = document.getElementByID("doneButton");
  const deleteButton = document.getElementByID("deleteButton");

  addButton.addEventListener("click", getTask);
  doneButton.addEventListener("click", markTaskDone);
  deleteButton.addEventListener("click", deleteTask);

  
  


  



    


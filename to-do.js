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


const addButton = document.querySelector("#addButton");


function getTask(e) {

    e.preventDefault();

    var task = document.getElementById("task").value; //get task from user
    var taskList = document.createElement("li");
    taskList.appendChild(task);
    <input type="image" src="ito-do-app/images/imgDeleteButton.PNG" alt="Submit" width="416" height="16"> 
  }

  function createDoneButton() {  
    const doneButton = document.createElement("button");
    doneButton.innerHTML="Done";
    document.taskList.appendChild(doneButton);  
  }

  function createDeleteButton() {  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML="Delete";
    document.taskList.appendChild(deleteButton);
  }
  
  function markTaskDone() {
    const doneButton = document.getElementById("doneButton");
    const taskList = document.createElement("taskList");//style list element task with strikethrough
  }

  function deleteTask() {
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener("click", deleteTask);
    taskList.removeChild("task");
  }
 
  addButton.addEventListener("click", getTask);
  createDoneButton();
  createDeleteButton();
  doneButton.addEventListener("click", markTaskDone);

  
  


  



    


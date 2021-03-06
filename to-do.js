function getTask(e) {
     e.preventDefault();
   var task = document.getElementById("taskInput");
   /*if (task = " ") {
   alert("Please enter a task.");
  }*/
  var taskList = document.getElementById("taskList");
  
  taskList.append(task.value);
  task.value = "";
}

  function markTaskDone() {
  task.style.textDecoration = "line-through";

  }

  function deleteTask() {
    taskList.removeChild("task");
  }

  const taskList = document.createElement("taskList");
  const doneButton = document.getElementById("doneButton");
  const deleteButton = document.getElementById("deleteButton");
  const addButton = document.querySelector("#addButton");


  addButton.addEventListener("click", getTask);
  //doneButton.addEventListener("click", markTaskDone);
 // deleteButton.addEventListener("click", deleteTask);
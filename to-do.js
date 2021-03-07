  const addButton = document.querySelector("#addButton");
  const doneButton = document.getElementById("doneButton");
  const deleteButton = document.getElementById("deleteButton");
  var taskInput = document.getElementById("taskInput");
   
    addButton.addEventListener("click", () => {
    var taskInput = document.getElementById("taskInput");
    var taskInputString = taskInput.value;
    var taskList = document.getElementById("taskList");
    var taskListItem = document.createElement("li");
    
    taskListItem.append(taskInputString);
    taskList.append(taskListItem);
    taskInputString = "";
  });
  
  //doneButton.addEventListener("click", () => {
    //taskListItem.style.textDecoration = "line-through";
  //});

 // deleteButton.addEventListener("click", () => {
    //taskList.removeChild("task");
 // });
 
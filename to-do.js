  const addButton = document.querySelector("#addButton");
  const doneButton = document.getElementById("doneButton");
  const deleteButton = document.getElementById("deleteButton");
  //var taskInput = document.getElementById("taskInput");
   
    addButton.addEventListener("click", () => {
    var taskInput = document.getElementById("taskInput");
    var taskInputString = taskInput.value;
    var taskList = document.getElementById("taskList");
    var taskListItem = document.createElement("li");
    
    taskListItem.append(taskInputString);
    taskList.append(taskListItem);
    taskInputString.value = "";
  });
  
  //taskList.addEventListener("click", () => {
  //  alert("Mark Done or Delete?");
 // });
  //user clicks on list item, pop-up alert with done button and delete button, when click
  //doneOrDeleteButton.addEventListener("click", () => {
    // if user left-clicks to select specific list item element and presses the "c" key, cross out item
    
    //taskListItem.style.textDecoration = "line-through";
  //});

 // deleteButton.addEventListener("click", () => {
   //if user selects specific list item element and presses the "delete" key, deletes the item
    //taskList.removeChild("task");
 // });
 
  const addButton = document.querySelector("#addButton");
  const OKButton = document.getElementById("OKButton");
  const cancelButton = document.getElementById("cancelButton");

    addButton.addEventListener("click", () => {
    var taskInput = document.getElementById("taskInput");
    var taskInputString = taskInput.value;
    var taskList = document.getElementById("taskList");
    var taskListItem = document.createElement("li");
    
    taskListItem.append(taskInputString);
    taskList.append(taskListItem);
    taskInputString.value = "";
    })



function getTask(e) {
  e.preventDefault();
  var newTask = document.getElementById("taskInput");
  var taskList = document.createElement("taskList");
  var firstTaskNode = document.createTextNode(newTask.value);
  taskList.appendChild(newTask.value)
  }

const submitBtn = document.querySelector("#addButton");
submitBtn.addEventListener("click", getTask);

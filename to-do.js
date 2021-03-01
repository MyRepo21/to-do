function getTask(e) {
  e.preventDefault();
  
  var newTask = document.getElementById("taskInput");
  var taskList = document.createElement('ul');
  //var firstTaskNode = document.createTextNode(newTask.value);
  taskList.append(newTask.value)
  }

  const submitBtn = document.querySelector("#addButton");
  submitBtn.addEventListener("click", getTask);

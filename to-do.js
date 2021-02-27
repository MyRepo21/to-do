/*

*/

function getTask(e) {
   e.preventDefault();
   var task = document.getElementById("taskInput");
   alert(task.value);
}

const submitBtn = document.querySelector("#addButton");
submitBtn.addEventListener("click", getTask);

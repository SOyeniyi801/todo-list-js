document.getElementById("btnAddTask").addEventListener("click", () => {
  const newTaskValue = document.getElementById("taskInput").value;
  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = newTaskValue;

  const newListItem = document.getElementById("taskList");
  newListItem.append(newTaskItem);
});

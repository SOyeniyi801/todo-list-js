document.getElementById("btnAddTask").addEventListener("click", () => {
  const newTaskValue = document.getElementById("taskInput").value;
  const newTaskItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTaskItem.appendChild(checkbox);

  const label = document.createElement("label");
  label.textContent = newTaskValue;
  newTaskItem.appendChild(label);

  const newListItem = document.getElementById("taskList");
  newListItem.appendChild(newTaskItem);

  document.getElementById("taskInput").value = "";
});

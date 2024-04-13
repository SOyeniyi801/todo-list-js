document.getElementById("btnAddTask").addEventListener("click", () => {
  const newTaskValue = document.getElementById("taskInput").value;
  const newTaskItem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = newTaskValue;
  newTaskItem.appendChild(label);

  const newListItem = document.getElementById("taskList");
  newListItem.appendChild(newTaskItem);

  document.getElementById("taskInput").value = "";
});

document.getElementById("taskList").addEventListener("click", (event) => {
  let listItems = event.target.closest("li");
  if (listItems) {
    console.log("clicked");
    listItems.classList.toggle("strike-through");
  }
});

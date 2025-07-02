document.getElementById("addTaskBtn").addEventListener("click", () => {
  const taskText = document.getElementById("taskInput").value.trim();
  if (taskText === "") return;

  const task = document.createElement("div");
  task.textContent = taskText;
  task.className = "bg-white p-2 rounded shadow cursor-pointer";

  task.addEventListener("click", () => {
    if (task.parentElement.id === "todo") {
      document.getElementById("inProgress").appendChild(task);
    } else if (task.parentElement.id === "inProgress") {
      document.getElementById("done").appendChild(task);
    }
  });

  document.getElementById("todo").appendChild(task);
  document.getElementById("taskInput").value = "";
});

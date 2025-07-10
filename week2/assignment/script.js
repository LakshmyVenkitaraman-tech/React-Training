document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromStorage();
});

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  const task = createTaskCard(text,"todo");
  document.getElementById("todo").appendChild(task);
  input.value = "";
  saveTasksToStorage();
});

function createTaskCard(text, columnId) {
  const task = document.createElement("div");
  task.className = "bg-white p-4 rounded shadow w-full mb-3";
  task.setAttribute("draggable", "true");

  const content = document.createElement("div");
  content.className = "text-gray-800 break-words";
  content.textContent = text;

  const buttons = document.createElement("div");
  buttons.className = "flex justify-end gap-3 mt-2";

  const editBtn = createTextButton("Edit", "bg-blue-500 hover:bg-blue-600", handleEdit);
  const delBtn = createTextButton("Delete", "bg-red-500 hover:bg-red-600", () => {
    task.remove();
    saveTasksToStorage();
  });

  buttons.append(editBtn, delBtn);

  function handleEdit() {
    const input = document.createElement("input");
    input.className = "border p-1 rounded w-full text-gray-800";
    input.value = content.textContent;

    const saveBtn = createTextButton("Save", "bg-green-500 hover:bg-green-600", () => {
      if (input.value.trim() !== "") {
        content.textContent = input.value.trim();
        resetButtons();
        task.replaceChild(content, input);
        saveTasksToStorage();
      }
    });

    const cancelBtn = createTextButton("Cancel", "bg-gray-400 hover:bg-gray-500", () => {
      task.replaceChild(content, input);
      resetButtons();
    });

    task.replaceChild(input, content);
    buttons.innerHTML = "";
    buttons.append(saveBtn, cancelBtn);
  }

  function resetButtons() {
    buttons.innerHTML = "";
    buttons.append(editBtn, delBtn);
  }

  task.append(content, buttons);

  task.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "");
    task.classList.add("opacity-50");
    window.draggedTask = task;
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("opacity-50");
    window.draggedTask = null;
  });

  return task;
}

function createTextButton(text, classes, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.onclick = onClick;
  btn.className = `${classes} text-white px-3 py-1 rounded text-sm transition`;
  return btn;
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const column = e.currentTarget;
  if (window.draggedTask) {
    column.appendChild(window.draggedTask);
    saveTasksToStorage();
  }
}
function saveTasksToStorage() {
  const columns = ["todo", "inProgress", "done"];
  const tasks = [];

  columns.forEach((colId) => {
    const column = document.getElementById(colId);
    const taskDivs = column.querySelectorAll("div[draggable='true']");
    taskDivs.forEach((taskDiv) => {
      const text = taskDiv.querySelector("div").textContent;
      tasks.push({ text, column: colId });
    });
  });

  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}
function loadTasksFromStorage() {
  const saved = localStorage.getItem("kanbanTasks");
  if (!saved) return;

  const tasks = JSON.parse(saved);
  tasks.forEach(({ text, column }) => {
    const task = createTaskCard(text, column);
    document.getElementById(column).appendChild(task);
  });
}

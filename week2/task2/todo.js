const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  list.innerHTML = "";

  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.className = "bg-white p-4 rounded-lg shadow flex justify-between items-center";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.className = "text-lg";
    if (todo.done) span.classList.add("line-through", "text-gray-500");

    const actions = document.createElement("div");
    actions.className = "flex gap-2";

    const doneBtn = createBtn("Done", "bg-green-500 hover:bg-green-600", () => toggleDone(i));
    const editBtn = createBtn("Edit", "bg-blue-500 hover:bg-blue-600", () => editTodo(i));
    const delBtn = createBtn("Delete", "bg-red-500 hover:bg-red-600", () => removeTodo(i));

    actions.append(doneBtn, editBtn, delBtn);
    li.append(span, actions);
    list.appendChild(li);
  });
}

function createBtn(text, colorClasses, onClick) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.onclick = onClick;
  btn.className =
    colorClasses +
    " text-white px-3 py-1 rounded transition text-sm";
  return btn;
}

function addTodo() {
  const text = input.value.trim();
  if (text) {
    todos.push({ text, done: false });
    input.value = "";
    saveAndRender();
  }
}

function toggleDone(i) {
  todos[i].done = !todos[i].done;
  saveAndRender();
}

function removeTodo(i) {
  todos.splice(i, 1);
  saveAndRender();
}

function editTodo(i) {
  const newText = prompt("Edit task:", todos[i].text);
  if (newText !== null && newText.trim()) {
    todos[i].text = newText.trim();
    saveAndRender();
  }
}

document.getElementById("addTaskBtn").onclick = addTodo;
saveAndRender();

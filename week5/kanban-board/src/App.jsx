import { useState } from "react";

export default function App() {
  const [columns, setColumns] = useState({
    todo: {
      name: "Todo",
      items: [{ id: "1", content: "Market research" },{ id: "2", content: "Write projects" },],
    },
    inProgress: {
      name: "In Progress",
      items: [{ id: "3", content: "Clean the room" },{ id: "4", content: "Do the laundry" },],
    },
    done: {
      name: "Done",
      items: [{ id: "5", content: "Sort the cupboard" },{ id: "6", content: "Take meds" },],
    },
  });

  const [newTask, setNewTask] = useState("");
  const [activeColumn, setActiveColumn] = useState("todo");
  const [draggedItem, setDraggedItem] = useState(null);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const addNewTask = () => {
    if (newTask.trim() === "") return;
    const updatedColumns = { ...columns };
    updatedColumns[activeColumn].items.push({
      id: Date.now().toString(),
      content: newTask,
    });
    setColumns(updatedColumns);
    setNewTask("");
  };

  const removeTask = (columnId, taskId) => {
    const updatedColumns = { ...columns };
    updatedColumns[columnId].items = updatedColumns[columnId].items.filter(
      (item) => item.id !== taskId
    );
    setColumns(updatedColumns);
  };

  const startEditingTask = (taskId, content) => {
    setEditingTaskId(taskId);
    setEditingContent(content);
  };

  const saveEditedTask = (columnId, taskId) => {
    const updatedColumns = { ...columns };
    const taskList = updatedColumns[columnId].items;
    const taskIndex = taskList.findIndex((item) => item.id === taskId);
    if (taskIndex !== -1) {
      taskList[taskIndex].content = editingContent;
    }
    setColumns(updatedColumns);
    setEditingTaskId(null);
    setEditingContent("");
  };

  const handleDragStart = (columnId, item) => {
    setDraggedItem({ columnId, item });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { columnId: sourceColumnId, item } = draggedItem;
    if (sourceColumnId === columnId) return;

    const updatedColumns = { ...columns };
    updatedColumns[sourceColumnId].items = updatedColumns[
      sourceColumnId
    ].items.filter((i) => i.id !== item.id);
    updatedColumns[columnId].items.push(item);
    setColumns(updatedColumns);
    setDraggedItem(null);
  };

  const renderTasks = (columnId, tasks) =>
    tasks.map((task) => (
  <div key={task.id} className="bg-white m-2 p-2 text-black rounded shadow" draggable onDragStart={() => handleDragStart(columnId, task)}>
        {editingTaskId === task.id ? (
   <div className="flex gap-2">
  <input  type="text" value={editingContent} onChange={(e) => setEditingContent(e.target.value)} className="flex-1 border px-2 py-1 text-black rounded"/>
  <button  onClick={() => saveEditedTask(columnId, task.id)}  className="bg-green-500 text-white px-2 rounded" >
              Save
            </button> </div>
        ) : (
          <div className="flex justify-between items-center gap-2">
            <span>{task.content}</span>
            <div className="flex gap-1">
          <button onClick={() => startEditingTask(task.id, task.content)} className="text-blue-600 text-sm hover:underline">
                Edit</button>
         <button onClick={() => removeTask(columnId, task.id)} className="text-red-600 text-sm hover:underline">
                Delete
              </button></div>
          </div>
        )}
      </div>
    ));

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-300 text-black min-h-screen font-bold items-center">
      <h1 className="text-2xl mb-4">KANBAN BOARD</h1>
      <div className="flex gap-2 mb-4 w-full max-w-xl">
     <select className="border px-2 py-1 rounded text-black" value={activeColumn} onChange={(e) => setActiveColumn(e.target.value)}>
          <option value="todo">Todo</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
    <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border px-2 py-1 rounded text-black"placeholder="New Task"/>
    <button onClick={addNewTask} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
      <div className="flex gap-4 w-full">
    <div className="flex-1 bg-red-300 min-h-[300px] rounded shadow p-4" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "todo")}>
          <h2 className="font-bold mb-3">Todo</h2>
          {renderTasks("todo", columns.todo.items)}
        </div>
    <div className="flex-1 bg-yellow-300 min-h-[300px] rounded shadow p-4" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "inProgress")} >
          <h2 className="font-bold mb-3">In Progress</h2>
          {renderTasks("inProgress", columns.inProgress.items)}
        </div>
    <div className="flex-1 bg-green-300 min-h-[300px] rounded shadow p-4" onDragOver={handleDragOver}  onDrop={(e) => handleDrop(e, "done")}>
          <h2 className="font-bold mb-3">Done</h2>
          {renderTasks("done", columns.done.items)}
        </div>
      </div>
    </div>
  );
}

function createContainer() {
  return `<div class="todo-container">
      <h1>ToDo List</h1>
      <input type="text" id="taskInput" placeholder="Add a new task" />
      <button>Add Task</button>
      <ul id="taskList"></ul>
    </div>`;
}
function insertContainer() {
  document.body.innerHTML = createContainer();
}
function initEvents() {
  insertContainer();
}
initEvents();

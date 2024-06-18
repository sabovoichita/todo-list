allTasks = [];

function $(selector) {
  return document.querySelector(selector);
}

function createContainer() {
  return `<div class="todo-container">
      <h1>ToDo List</h1>
      <input type="text" id="taskInput" placeholder="Add a new task" />
      <button id="addButton">Add Task</button>
      <ul id="taskList"></ul>
    </div>`;
}

function insertContainer() {
  document.body.innerHTML = createContainer();
}

function createHTMLTask(task) {
  return `<li>${task.name}</li>
    <button id="deleteButton">♻</button><button id="editButton">🖊</button>`;
}

function displayNewTask(tasks) {
  const taskHTML = tasks.map(createHTMLTask).join("");
  $("#taskList").innerHTML = taskHTML;
  console.log(taskHTML);
}

function addTask() {
  const inputText = $("#taskInput").value;
  //   console.log("input:", inputText);
  if (inputText !== "") {
    const newTask = { name: inputText };
    allTasks.push(newTask);
    displayNewTask(allTasks);
    console.log("allTasks:", allTasks);

    saveTaskToLocalStorage();
    $("#taskInput").value = "";
  }
}

function saveTaskToLocalStorage() {
  localStorage.setItem("task", JSON.stringify(allTasks));
}

function initEvents() {
  insertContainer();
  let button = $("#addButton");
  button.addEventListener("click", () => addTask());
}

initEvents();

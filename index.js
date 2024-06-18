allTasks = [];

function $(selector) {
  return document.querySelector(selector);
}

function createContainer() {
  return `<div class="todo-container">
      <h1>
        Todo List
        <span>Get things done, one item at a time.</span>
      </h1>
      <input type="text" id="taskInput" placeholder="Add new task:" />
      <button id="addButton">Add Task</button>
      <ul id="taskList"></ul>
    </div>`;
}

function insertContainer() {
  document.body.innerHTML = createContainer();
}

function createHTMLTask(task) {
  return `<li>${task.name}</li>
    <span><button id="deleteButton" class="actions">♻</button><button id="editButton">🖊</button></span>`;
}

function displayNewTask(tasks) {
  const taskHTML = tasks.map(createHTMLTask).join("");
  $("#taskList").innerHTML = taskHTML;
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

function loadTaskFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("task"));
  allTasks = tasks;
  displayNewTask(allTasks);
}

function initEvents() {
  insertContainer();
  loadTaskFromLocalStorage();

  let button = $("#addButton");
  button.addEventListener("click", () => addTask());
}

initEvents();

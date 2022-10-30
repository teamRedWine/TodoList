const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoUl = document.querySelector(".todoUl");

let toDos = [];
const TODOS_KEY = "toDos";
// 키값인 toDos를 변수로 선언해주었습니다.

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodo = JSON.parse(savedTodos);
  toDos = parsedTodo;
  toDos.forEach(paintTodo);
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.classList.add("list-item");
  li.id = newTodoObj.id;
  li.textContent = newTodoObj.text;
  todoUl.appendChild(li);

  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", delTodo);
  delBtn.textContent = "삭제";
  li.appendChild(delBtn);
}

function delTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  // console.log(li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}
function removeItem(){
  
}

function handleTodo(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoBtn.addEventListener("click", handleTodo);

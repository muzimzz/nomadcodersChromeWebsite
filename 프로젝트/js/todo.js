const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

let todos = [];
const TODOS_KEY = "todos";



function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
} 

function deleteTodo(e) {
  // console.dir(e);
  const deleteLi = e.target.parentElement;
  deleteLi.remove();
  todos = todos.filter((todo) => parseInt(deleteLi.id) !== todo.id);
  saveTodo(); 
}

function paintTodo(todoObj) {
  const newTodoLi = document.createElement("li");
  newTodoLi.id = todoObj.id;
  const newTodoContent = document.createElement("span");
  const deleteTodoButton = document.createElement("button");
  deleteTodoButton.innerHTML = "delete";
  newTodoLi.appendChild(newTodoContent);
  newTodoLi.appendChild(deleteTodoButton);
  
  deleteTodoButton.addEventListener("click", deleteTodo);
  newTodoContent.innerHTML = todoObj.text;
  todoList.appendChild(newTodoLi);
  // localStorage.setItem("todo", todoInputValue);
}

function onSubmitTodo(e) {
  e.preventDefault();
  const todoInput = todoForm.querySelector("#todo-input");
  const todoInputValue = todoInput.value;
  
  todoInput.value = "";
  
  const newTodoObj = {
    id: Date.now(),
    text: todoInputValue,
  };
  paintTodo(newTodoObj);
  todos.push(newTodoObj);
  saveTodo();

}

todoForm.addEventListener("submit", onSubmitTodo);

const savedTodos = localStorage.getItem("todos");
if (savedTodos) { // if (savedTodos != null)
  const parsedTodo = JSON.parse(savedTodos);
  parsedTodo.forEach(paintTodo); /* 
  for (i in parsedTodo) {
      paintTodo(parsedTodo[i]);
  } */
  todos = parsedTodo;
}



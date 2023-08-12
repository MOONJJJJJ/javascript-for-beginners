const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo.text; 
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerText = "💗";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    console.log(newTodoObj,toDoInput.value);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){
    console.log("This is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
}
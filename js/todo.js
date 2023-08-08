const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo; 

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
    console.log(newTodo,toDoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);
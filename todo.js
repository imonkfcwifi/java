const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

function handleToDoSubmit(event){

    event.preventDefault();
    const newtodo = toDoInput.value;
    toDoInput.value="";
    const newtodoObject = {
        text:newtodo,
        id: Date.now()
        
    }
    toDos.push(newtodoObject);
    paintTodo(newtodoObject);
    saveToDos();

}


function sayhello(item){
    console.log("this is the turn of",item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);


}


toDoForm.addEventListener("submit",handleToDoSubmit);

function paintTodo(newtodo){

    const list = document.createElement("li");
    list.id = newtodo.id;
    const spanding = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="★";
    button.addEventListener("click",deleteToDo);
    list.appendChild(spanding);
    list.appendChild(button);
    spanding.innerText = newtodo.text;
    toDoList.appendChild(list);
}

function deleteToDo(event){
    const removeParent = event.target.parentElement;
    removeParent.remove();
}

}

//니콜라스 세라노 아레발로
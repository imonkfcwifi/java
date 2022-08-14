const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
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



const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);


}

function sexyfilter(){

}

//array에서 삭제할때, 사실 삭제가 아니라 지우고 싶은 item을 빼고 새 array를 만듬
//filter함수는 return시 true면 유지시켜주고 false면 삭제하는 역할을 한다.

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
    toDos = toDos.filter(youmo => youmo.id !== parseInt(removeParent.id ));
    removeParent.remove();
    saveToDos();
}


//니콜라스 세라노 아레발로

//const todos = [{text : a}]
//function sexyFilter(todo){}
//sexyFilter의 () 안에있는 글자는 뭐가 되든 상관없음 단지 function의 첫번째 argument가 됨
//ex : abc(def){ def.어쩌고 저쩌고}
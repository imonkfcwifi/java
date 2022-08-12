const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
// = todoForm.querySelector("input");
const toDos = [];
const TODOS_KEY = "todos";
//local storage는 text만 저장가능

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    //JSON.Stringify는 arry나 어떤 javascript 코드건 간에 string으로 바꿔준다.
    //JSON.parase는 JavaScript가 이해할 수 있는 array로 만들어준다.(구문분석, 해석을 도맡아줌.)
}
function handleToDoSubmit(event){

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
    //input의 value를 새로운 변수에 복사하는 것이기 때문에 value의 값이 empty가 되더라도 값은 newTodo 저장되어 남아있다.
}

toDoForm.addEventListener("submit",handleToDoSubmit);


function paintTodo(newTodo){

    const list = document.createElement("li");
    //const 뒤 list는 상관없지만 creatElement에서의 li는 html과 같아야 함.
    const spanding = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="★";
    button.addEventListener("click",deleteToDo);
    list.appendChild(spanding);
    list.appendChild(button);
    //li안에 span 생성 === createElement("span")
    spanding.innerText = newTodo;
    //span안에 들어갈 newTodo는 사용자가 form에서 우리에게 준 newTodo 값이다.
    toDoList.appendChild(list);
    //todolist에 <li></li> 생성하기 === createElement("li")
}
//span은 줄바꿈이 되지 않는 속성이다.

function deleteToDo(event){
    const removeParent = event.target.parentElement;
    removeParent.remove();
    //어떤 버튼을 지울건지 정해줘야함. 그냥 버튼으로 해놓으면 하나만 눌러도 모든 button을 인식해서 function을 실행시켜버림
}

function sayhello(item){
    console.log("this is the turn of",item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);
if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(sayhello);
    //sayhello("a"),sayhello("b") . . .
    //array 이기에 가능한 일이다.

}

//array는 가장 중요한 data type, 각각의 item에 대해 function 가능
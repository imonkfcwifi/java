const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
// = todoForm.querySelector("input");

function paintTodo(newTodo){

    const list = document.createElement("li");
    //const 뒤 list는 상관없지만 creatElement에서의 li는 html과 같아야 함.
    const spanding = document.createElement("span");
    list.appendChild(spanding);
    //li안에 span 생성 === createElement("span")
    spanding.innerText = newTodo;
    //span안에 들어갈 newTodo는 사용자가 form에서 우리에게 준 newTodo 값이다.
    toDoList.appendChild(list);
    //todolist에 <li></li> 생성하기 === createElement("li")
}
//span은 줄바꿈이 되지 않는 속성이다.
function handleToDoSubmit(event){

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintTodo(newTodo);
    //input의 value를 새로운 변수에 복사하는 것이기 때문에 value의 값이 empty가 되더라도 값은 newTodo 저장되어 남아있다.
}

toDoForm.addEventListener("submit",handleToDoSubmit);

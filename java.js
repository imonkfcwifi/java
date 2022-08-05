//const loginForm = document.getElementById("login-form");
//const ioginInput = loginForm.querySelector("input");
//const ioginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function loginclick(){
   const username = loginInput.value;
   if (username === ""){
    alert("plz write your right name");
   } else if (username.length > 15){
    alert("your name is too long");
   } else {
    alert("hi username");
   }
   
}
//이렇게 하는것도 좋지만 우리는 browser에 있는 기능을 사용하길 선호한다.//


loginButton.addEventListener("click",loginclick);
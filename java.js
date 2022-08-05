const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");

function onloginsubmit(evento){
evento.preventDefault();
   console.log(logininput.value);

}

//이렇게 하는것도 좋지만 우리는 browser에 있는 기능을 사용하길 선호한다.//


loginForm.addEventListener("submit", onloginsubmit);

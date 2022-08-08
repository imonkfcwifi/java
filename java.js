const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginBtnClick() {
const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고
//string을 저장하고 싶을때 사용함.
//그리고 위 HIDDEN CLASSNAME은 loginform이나 logininput처럼 중요한 정보를 담은것이 아니라 대문자로 작성함.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  //greeting.innerText = "Hello" + username;
  greeting.innerText = `Hello ${username}`

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
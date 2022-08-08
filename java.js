const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//만약 string을 작성하다 오타가 나면 js는 지적하지 않는다
//하지만 변수를 오타 낼 경우 js는 console에서 알려줄 것

function greetingsYes(username){
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
   const div = document.createElement("div");
   const button = document.createElement("button");
   button.innerText = "logout";
   div.appendChild(button);
   greeting.appendChild(div);
   button.addEventListener("click", logout);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  greetingsYes(username);

}

function logout() {
   localStorage.removeItem(USERNAME_KEY);
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   greeting.classList.add(HIDDEN_CLASSNAME);
   }

const saveUsername= localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
   //show the form

} else {
greetingsYes(saveUsername);
   //show the greetings
}


//  greeting.innerText = `Hello ${username}`
//greeting.classList.remove(HIDDEN_CLASSNAME);
//위 행위를 두번이나 반복하고 있기때문에 function 만든다.
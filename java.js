const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "NickName";
//key username value : variable
//만약 string을 작성하다 오타가 나면 js는 지적하지 않는다
//하지만 변수를 오타 낼 경우 js는 console에서 알려줄 것

function greetingsYes(){
   const username = localStorage.getItem(USERNAME_KEY);
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
   const div = document.createElement("div");
   const button = document.createElement("button");
   //html에서는 "abcde" -> <abcde> </abcde>
   button.innerText = "logout";
   div.appendChild(button);
   //div에 logout이라고 써져있는 Text를 삽입한다.
   greeting.appendChild(div);
   //greeting에 div를 child로 삽입한다.
   button.addEventListener("click", logout);
}
//greetingyes는 text만 받는다.
function onLoginSubmit(event) {
  event.preventDefault();
  //event.preventDefault() prevent any event
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //전역함수가 아닌 지역함수로 지정하고, 습관을 들여야 하는 이유
  //전역함수로 지정해놓을 경우 바깥으로 나가서 loginInput의 value 값을 " "으로 해놓아 버리기 때문에
  //cuz const 는 never changed 그렇다면 let을 사용하면 어떨까?
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  greetingsYes();

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
greetingsYes();
   //show the greetings
}


//  greeting.innerText = `Hello ${username}`
//greeting.classList.remove(HIDDEN_CLASSNAME);
//위 행위를 두번이나 반복하고 있기때문에 function 함수 만든다.
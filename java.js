const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고
//string을 저장하고 싶을때 사용함.
//그리고 위 HIDDEN CLASSNAME은 loginform이나 logininput처럼 중요한 정보를 담은것이 아니라 대문자로 작성함.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //hidden 이라는 class name을 추가해서 form을 숨긴다
  const username = loginInput.value;
  //변수를 저장후 이 변수를 h1에 집어넣는다.
  //greeting.innerText = "Hello" + username;
  localStorage.setItem("username", username)
  greeting.innerText = `Hello ${username}`

  greeting.classList.remove(HIDDEN_CLASSNAME);
  //hidden 의 class 명을 갖고있는 form과 h1원 중
  //h1 의 hidden class name을 제거하여 form이ㅡ hidden 만을 남겨놓는다.


}

loginForm.addEventListener("submit", onLoginSubmit);

//<a> 요소는 앵커(anchor)로써, 문서 간의 연결, URI 참조가 주된 목적
//1. 클릭하면, 자동으로 새로고침 되어 정보가 날아가는 것을 막고(preventDefault();)
//2. loginForm을 감추고(hidden)
//3. hidden 됐던 A 문구가 나타나고(remove hidden)
//4. A 문구와 username을 합쳐서 완전한 문구를 완성한다.


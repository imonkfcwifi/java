const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");

const link = document.querySelector("a");
function onloginsubmit(event){
event.preventDefault();
   console.log(event);

}

//이렇게 하는것도 좋지만 우리는 browser에 있는 기능을 사용하길 선호한다.//

function handlelinkclicker(event){
   event.preventDefault();
console.dir(event);
 alert("clicked");
}
loginForm.addEventListener("submit", onloginsubmit);
link.addEventListener("click", handlelinkclicker);
//addEventListener의 함수는 직접 실행이 아닌 브라우저에 내장되어있는 것을 실행 시킨 것 이다.
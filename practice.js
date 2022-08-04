const h1 = document.querySelector(".hi:first-child h1");

function handleTitleClick(){
// 계속되는 string을 간소회
//-> const로 이름을 정해줘서 인위적이고 짜증나는 string 을 제거한다.
//베이러블로 만들어버려!!
h1.classList.toggle("yu");
}
h1.addEventListener("click",handleTitleClick);
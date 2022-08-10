const clock = document.querySelector("h2#clock");

function getClock(){
    const date= new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//date가 아닌 Date.. setinterval이 아닌 setInterval
//대문자 소문자 구분에 민감해지자 

getClock();
//getClock을 바로 호출 즉시
setInterval(getClock, 1000);
//interval은 '매번' 일어나야하는 무언가를 뜻 함
//sayhello function을 5000ms ,즉 5초마다 호출
//setTimeout은 일정시간이 지난 후 함수를 실행

//padStart()는 string에서 쓸수있는 function (앞열에 추가)

//txt to number -> new Date().getHours( === 19
//txt to string -> String(new date().getHours()) === "19"
//txt to string -> String()로 감싸준다.
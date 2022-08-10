const clock = document.querySelector("h2#clock");


clock.innerText("What")

function sayhello(){
    console.log("hello");
}


setInterval(sayhello, 5000);
//interval은 '매번' 일어나야하는 무언가를 뜻 함
//sayhello function을 5000ms ,즉 5초마다 호출
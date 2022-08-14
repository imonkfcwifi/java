const API_KEY = "27da3a66fdb14c7f2ff9c06b73372604"

function onGeoOk(position){

    const lat = position.coords.latitude ;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric` ;
    console.log("you livin in",lat,lng);
    fetch(url).then(Response => Response.json()).then(data=>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    //js에서 url을 불러줌
    //wetube에서 공부해봅시다...
}
function onGeoError(){
    alert("i cant find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

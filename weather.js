function onGeoOk(position){

    const lat = position.coords.latitude ;
    const lng = position.coords.longitude;
    console.log("you livin in",lat,lng);
}
function onGeoError(){
    alert("i can find you, no weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat=35.858723&lon=128.458389&appid=27da3a66fdb14c7f2ff9c06b73372604
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)]
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

//<img src="img/0.jpg"/>를 html에서 한 것과 같은 결과를 JS에서 만들어줌

console.log(bgImage);
document.body.appendChild(bgImage);
//appendChild는 body에 html을 추가해준다.\
//append는 가장뒤에 , prepend는 가장 위에 오게 하는것
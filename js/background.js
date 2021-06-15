const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img 태그 생성
const bgImage = document.createElement("img");
// img src 지정
bgImage.src = `img/${chosenImage}`
// body 태그 안에 생성된 img 태그 삽입
document.body.appendChild(bgImage);
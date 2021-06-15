const clock = document.querySelector("#clock");

// Clock function
function getClock() {
    // padStart 함수를 통해 숫자가 한자리 일때는 앞에 0을 추가
    // ex) 12:30:2 --padStart--> 12:30:02
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 최초 getClock 호출 후 1000ms(1sec) 마다 반복
// getClock을 최초 호출함으로써 처음 Page Load시 clock값이 없는 증상을 해결
getClock();
setInterval(getClock, 1000);
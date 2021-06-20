const date = document.getElementById("date");

function getDate() {
    const dates= new Date();
    const year = String(dates.getFullYear());
    const month = String(dates.getMonth()).padStart(2, "0");
    const day = String(dates.getDate()).padStart(2, "0");
    date.innerText = `${year}.${month}.${day}`;
}

getDate();
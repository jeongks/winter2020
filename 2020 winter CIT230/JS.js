let today = new Date();
let date = today.getDate() + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today
    .getFullYear() + ' ' + today.getHours() + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(
        today.getSeconds()).padStart(2, '0');

current = document.getElementById("date");

function getFontSize(x) {
    if (x.matches) {
        current.style.fontSize = "80%";
    } else {
        current.style.fontSize = "100%";
    }
}

var x = window.matchMedia("(max-wdith: 34.99rem)");
getFontSize(x);
x.addListener(getFontSize);


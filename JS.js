let today = new Date();
let date = today.getDate()+'/'+today.getMonth()+'/'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

document.getElementById("currentdate").textContent = date;
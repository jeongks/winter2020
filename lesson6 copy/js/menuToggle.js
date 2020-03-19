function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
/** current date */
var today = new Date();
                    var weekday = new Array(7);
                    weekday[0] = "Sunday";
                    weekday[1] = "Monday";
                    weekday[2] = "Tuesday";
                    weekday[3] = "Wednesday";
                    weekday[4] = "Thursday";
                    weekday[5] = "Friday";
                    weekday[6] = "Saturday";
                    var day = weekday[today.getDay()];
                    var months = new Array();
                    months[0] = "January";
                    months[1] = "February";
                    months[2] = "March";
                    months[3] = "April";
                    months[4] = "May";
                    months[5] = "June";
                    months[6] = "July";
                    months[7] = "August";
                    months[8] = "September";
                    months[9] = "October";
                    months[10] = "November";
                    months[11] = "December";
                    var month = months[today.getMonth()];
                    var date = day + ',' + today.getDate() + ' ' + month + ' ' + today.getFullYear();
                    document.getElementById("date").textContent = date;

/******* message */

var today = new Date();

const dayNumber = today.getDay();
const element = document.getElementById("message");
if (dayNumber == 5){
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}

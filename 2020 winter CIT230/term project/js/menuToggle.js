function toggleMenu(){
    document.getElementById("mainNav").classList.toggle("hide");
}

function toggleBegin(){
    document.getElementById("begginerbutton").classList.toggle("hide");
}

function toggleInt(){
    document.getElementById("intbutton").classList.toggle("hide");
}

function toggleAdvance(){
    document.getElementById("advancedbutton").classList.toggle("hide");
}

function toggleGroup(){
    document.getElementById("groupbutton").classList.toggle("hide");
}

function toggleOne(){
    document.getElementById("oneday").classList.toggle("hide");
}

function toggleTwo(){
    document.getElementById("twoday").classList.toggle("hide");
}

function toggleThree(){
    document.getElementById("threeday").classList.toggle("hide");
}

function toggleBookB(){
    document.getElementById("beginnerrafting").classList.toggle("hide");
}
function toggleBookI(){
    document.getElementById("intermediaterafting").classList.toggle("hide");
}
function toggleBookA(){
    document.getElementById("advancedrafting").classList.toggle("hide");
}
function toggleBookG(){
    document.getElementById("grouprafting").classList.toggle("hide");
}
function toggleBookt1(){
    document.getElementById("onedaytrip").classList.toggle("hide");
}
function toggleBookt2(){
    document.getElementById("twodaytrip").classList.toggle("hide");
}
function toggleBookt3(){
    document.getElementById("threedaytrip").classList.toggle("hide");
}
function toggleservice(){
    document.getElementById("service").classList.toggle("hide");
}
/*------ current date ------*/
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




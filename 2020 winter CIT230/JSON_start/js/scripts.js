//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=f3dbc42cf2a8636fdc9d4f58d6627a4b&units=imperial"


const mydate = new Date();

const y =   mydate.getDay();

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    for (let i=0; i < weatherInfo )
    document.getElementById('place').innerHTML=weatherInfo.name;

    document.getElementById('currentTemp').innerHTML=weatherInfo.list[0].main.temp;

    document.getElementById('windSpeed').innerHTML=weatherInfo.list[0].wind.speed;
    
    const iconcode = weatherInfo.list[0].weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function




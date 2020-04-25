//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=f3dbc42cf2a8636fdc9d4f58d6627a4b&units=imperial"


const mydate = new Date();


const todaynumber =   mydate.getDay();


const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

let forcastDayNumber = todaynumber;


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('townname').textContent = weatherInfo.city.name;

    let mylist = weatherInfo.list;

    for (i = 0; i <mylist.length; i++){
      var time = mylist[i].dt_txt;
      if (time.includes("18:00:00")){

        forcastDayNumber += 1;
        if ( forcastDayNumber === 7){forcastDayNumber = 0;}

        let dayName = document.createElement("h5");
        dayName.textContent = myweekday[forcastDayNumber];

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = icon_path;

        let theDay = document.createElement("div");
        theDay.appendChild(dayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById("forecast").appendChild(theDay);
        
      } 
      
      
    }

    
    

 }); //end of "then" fat arrow function




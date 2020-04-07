const sourceurl = "//"



let forcastDayNumber = todaynumber;

fetch(apiurl)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
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


 });
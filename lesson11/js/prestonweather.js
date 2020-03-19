const prestonURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f3dbc42cf2a8636fdc9d4f58d6627a4b&units=imperial";


fetch(prestonURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let currentWeather = document.createElement("p");
        currentWeather.textContent = "Weather: " + jsObject.weather[0].main;
  
        let currentTemp = document.createElement("p");
        currentTemp.textContent = "Temperature: " + jsObject.main.temp + "\xB0";
        
        let windchill = document.createElement("p");
        windchill.textContent = "Windchill: " +  Math.round(35.74 + (jsObject.main.temp * 0.6215) 
                                                            - (35.75 * Math.pow(jsObject.wind.speed,0.16)) 
                                                            + (0.4275 * jsObject.main.temp * Math.pow(jsObject.wind.speed,0.16)) )
                                + "\xB0";
        let humidity = document.createElement("p");
        humidity.textContent = "Humidity: " + jsObject.main.humidity + "\u0025";
  
        let windSpeed = document.createElement("p");
        windSpeed.textContent = "WindSpeed: " + jsObject.wind.speed;
  
        let textBlock = document.createElement("div");
  
        textBlock.appendChild(currentWeather);
        textBlock.appendChild(currentTemp);
        textBlock.appendChild(windchill);
        textBlock.appendChild(humidity);
        textBlock.appendChild(humidity);
        textBlock.appendChild(windSpeed);
  
        document.getElementById("text-block").appendChild(textBlock);

    });

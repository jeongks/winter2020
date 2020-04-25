const apiURL ="http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f3dbc42cf2a8636fdc9d4f58d6627a4b&units=imperial";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const coord = jsObject['coord'];
        const weather = jsObject['weather'];
        const main = jsObject['main'];
        const wind = jsObject['wind'];
        const name = jsObject['name'];

        let card = document.createElement("section");

        let h2 = document.createElement("h2");
        let pweather = document.createElement("p");
        let pmaintemp = document.createElement("p");
        let pmainftemp = document.createElement("p");
        let pmaintempl = document.createElement("p");
        let pmaintemph = document.createElement("p");
        let phumidity = document.createElement("p");
        let pwind = document.createElement("p");
   
        h2.textContent = name.name;

        pweather.textContent = "Weather: " + weather.description;
        pmaintemp.textContent = (main.temp - 273.15)* 9/5 +32;
        pmainftemp.textContent = "Feel Like: " + main.feel_like;
        pmaintempl.textContent = "Minimum Temperature: " + main.temp_min;
        pmaintemph.textContent = "Maximum Temperature: " + main.temp_max;
        phumidity.textContent = "Humidity: " + main.humidity;
        pwind.textContent = "Wind Speed: " + wind.speed;

        
        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc =  'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const description = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alr', description);
        
        // card.appendChild(h2);
        // card.appendChild(pweather);
        // card.appendChild(pmaintemp);
        // card.appendChild(pmainftemp);
        // card.appendChild(pmaintempl);
        // card.appendChild(pmaintemph);
        // card.appendChild(phumidity);
        // card.appendChild(pwind);

        // document.querySelector('div.cards').appendChild(card);

        
    });
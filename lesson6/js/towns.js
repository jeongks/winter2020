const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            

            let card = document.createElement('section');
        
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let prainfall = document.createElement('p');
            let population = document.createElement('p');
            let pevent = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            prainfall.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            population.textContent = "Current Population: " + towns[i].currentPopulation;
            pevent.textContent = "Upcoming Event: " + towns[i].events[0];

            img.setAttribute('src', "images/"+towns[i].photo);
            img.setAttribute('alt', towns[i].name);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(prainfall);
            card.appendChild(population);
            card.appendChild(pevent);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
            
        }
    });
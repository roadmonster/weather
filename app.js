window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let myIcon = document.querySelector('.icon');
    let img = document.createElement('img');

    if(navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = Number(position.coords.longitude);
            lat = Number(position.coords.latitude);
            
            const api = `http://api.weatherstack.com/current?access_key=65aba8b9d10840e7226f62031e0fa1ff&query=${lat},${long}`;
            console.log(api);
            fetch(api)
            .then(data => {
                return data.json();
            })
            .then(data=>{
                console.log(data);
                const {temperature, weather_descriptions} = data.current;
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = weather_descriptions;
                const{name, region} = data.location;
                locationTimezone.textContent = name + "\n" + region;
                let src = data.current.weather_icons;
                img.src = src;
                img.width = 200;
                img.height = 200;
                myIcon.appendChild(img);
                console.log(img);
        


            })
        })
    }

    

})
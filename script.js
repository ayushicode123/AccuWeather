const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99ce933f3cmsh844f9f7d8f6a2e3p165772jsn5da690fc3a3e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
    
    
            console.log(response)
        })
        .catch(err => console.error(err));
    }
    
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })
    
    getWeather('Delhi')
    
    delhi = document.getElementById('delhi')
    delhi.addEventListener('click',(e)=>{
        getWeather('delhi')
    })
    
    banglore = document.getElementById('banglore')
    banglore.addEventListener('click',(e)=>{
        getWeather('bangalore')
    })
    
    vadodara = document.getElementById('vadodara')
    vadodara.addEventListener('click',(e)=>{
        getWeather('vadodara')
    })
        

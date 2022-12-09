const submitButton = document.querySelector("#submit-btn");
const weatherContainer = document.querySelector("#weather")
const locationContainer = document.querySelector("#location_holder")
const realFeelContainer = document.querySelector("#real-feel")
const descriptionContainer = document.querySelector("#des");
const locationValue = document.querySelector("#location");

const humidityContainer = document.querySelector("#humidity");
const windContainer = document.querySelector("#wind")
const airPressureContainer = document.querySelector("#air-pressure");
submitButton.addEventListener("click",getCurrentWeather,false);

const images = ["01d@2x.png","01n@2x.png","02d@2x.png","02n@2x.png","03d@2x.png","04d@2x.png","09d@2x.png","10d@2x.png","10n@2x.png","11d@2x.png","13d@2x.png","50d@2x.png"]

function getCurrentWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?&appid=2c16ef07acbc442f39fcedbe1d4699b5&units=metric&q='+locationValue.value)
    .then(respone => respone.json())
    .then(data => {
        locationContainer.innerHTML = data["name"]
        weatherContainer.innerHTML = data["main"]["temp"] + "	&#8451"
        realFeelContainer.innerHTML = data["main"]["feels_like"]+ "	&#8451"
        descriptionContainer.innerHTML = data["weather"][0]["description"]
        humidityContainer.innerHTML = data["main"]["humidity"] + "%"
        windContainer.innerHTML = data["wind"]["speed"] + " mps"
        airPressureContainer.innerHTML = data["main"]["pressure"]
       
        console.log(data)
        console.log(data["weather"][0]["icon"])
        const iconI = data["weather"][0]["icon"]
        //document.querySelector("#weather-image").src = iconI+"@2x.png";
        document.getElementById("weather-image").src = "images/"+iconI + "@2x.png";

    
       
    })

.catch(err => alert("Wrong city"))
}







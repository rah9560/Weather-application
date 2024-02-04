const apikey="c7d691ba76b34cd8c3145009ba18a166"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkweatherapp(city){
    const response= await fetch(apiurl+`&q=${city}`+`&appid=${apikey}`)
    const data=await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Fog"){
        weatherIcon.src="./images/fog.png"
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png"
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="./images/snow.png"
    }

    document.querySelector(".weather").style.display="block";
}
searchBtn.addEventListener("click",()=>{
    checkweatherapp(searchBox.value);
})
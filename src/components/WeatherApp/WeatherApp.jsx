import React from "react";
import "./WeatherApp.css";

const env = import.meta.env;
// IMAGES
import search_icon from "../../assets/search.png";
import wind_icon from "../../assets/wind.png";
import humidity_icon from "../../assets/humidity.png";

function WeatherApp() {
  const [icon, setIcon] = React.useState("");

  const api_key = import.meta.env.VITE_API_KEY;
  // https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid={api_key}

  // ASYNC function
  const search = async () => {
    const element = document.querySelector(".cityInput");
    // console.log(element.value);

    if (!element.value) {
      // console.log("empty");
      alert("Insert a city!");
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod == "404") {
      alert("City not found");
      return 0;
    }

    // DATA IN DOM
    const humidity = document.querySelector(".humidity-percent");
    const wind_rate = document.querySelector(".wind-rate");
    const temperature = document.querySelector(".weather-temp");
    const location = document.querySelector(".weather-location");
    const weather_icon = document.querySelector("#weather-icon");

    humidity.innerHTML = data.main.humidity + " %";
    wind_rate.innerHTML = data.wind.speed + " km/h";
    temperature.innerHTML = data.main.temp + " ºc";
    location.innerHTML = data.name;
    // weather_icon.src = `https://openweathermap.org/img/wn/${data.wather[0]}@2x.png`;

    setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  };

  return (
    <div className="container">
      <h1>Weather app</h1>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search city" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      {icon && (
        <div className="weather-image">
          <img id="weather-icon" src={icon} alt="weather_icon" />
        </div>
      )}
      <div className="weather-temp">24 c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;

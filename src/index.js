import "./styles.css";
import { VisualCrossingWeatherAPI } from "./helpers/retrieve";
import { API_KEY } from "./helpers/constants.js";

const weather = new VisualCrossingWeatherAPI(API_KEY);
updateWeather();

const location = document.querySelector("#location");
const locationBtn = document.querySelector("#location-btn");

location.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weather.setMainParameters(location.value);
    updateWeather();
  }
});

locationBtn.addEventListener("click", () => {
  weather.setMainParameters(location.value);
  updateWeather();
});

const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");

startDate.addEventListener("change", () => {
  weather.setMainParameters(location.value, startDate.value, endDate.value);
});

function updateWeather() {
  weather.fetchData().then((res) => {
    console.log(res);
    console.log(weather.URL);
  });
}

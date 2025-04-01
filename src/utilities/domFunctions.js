import { getDayText } from "./helpers";
import { loadWeatherImage } from "../assets/weather";

export function updateDOM(res) {
  updateJumbotronDOM(res);
  updateHighlightsDOM(res.currentConditions);
  updateWeeklyForecastDOM(res.days);
}

function updateJumbotronDOM(data) {
  const locationAxis = document.querySelector(".location-axis");
  const locationName = document.querySelector(".location-name");
  const locationDesc = document.querySelector(".location-desc");

  locationAxis.textContent = `${data.latitude}, ${data.longitude}`;
  locationName.textContent = data.address;
  locationDesc.textContent = data.description;
}

function updateHighlightsDOM(data) {
  const mainTemperature = document.querySelector(".main-temperature");
  const mainHumidity = document.querySelector(".main-humidity");
  const mainWind = document.querySelector(".main-wind");
  const mainPrecipitation = document.querySelector(".main-precipitation");

  mainTemperature.textContent = data.temp;
  mainHumidity.textContent = data.humidity;
  mainWind.textContent = data.windspeed;
  mainPrecipitation.textContent = data.precipprob;
}

function updateWeeklyForecastDOM(arrayData) {
  const weekForcastConatiner = document.querySelector(
    ".week-forecast-container"
  );
  weekForcastConatiner.textContent = "";

  arrayData.forEach((day) => {
    const dayContainer = document.createElement("div");
    dayContainer.classList.add("day-forecast");
    dayContainer.innerHTML = `          
    <h1>${getDayText(day.datetime)}</h1>
    <h2>${day.datetime}</h2>
    <h2>${day.temp}C</h2>
    <p>${day.conditions}</p>`;

    const img = document.createElement("img");
    img.src = loadWeatherImage[day.icon];
    img.alt = day.icon;
    dayContainer.prepend(img);

    weekForcastConatiner.appendChild(dayContainer);
  });
}

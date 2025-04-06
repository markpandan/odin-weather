import { getDayText } from "./helpers";
import { WEATHER_IMAGE } from "../assets/weather";

export function updateDOM(res) {
  updateJumbotronDOM(res);
  updateHighlightsDOM(res.currentConditions);
  updateWeeklyForecastDOM(res.days);
}

function updateJumbotronDOM(data) {
  const locationAxis = document.querySelector(".location-axis");
  const locationName = document.querySelector(".location-name");
  const locationDesc = document.querySelector(".location-desc");
  const locationTemp = document.querySelector(".location-temp");

  locationAxis.textContent = `${data.latitude}, ${data.longitude}`;
  locationName.textContent = data.address;
  locationDesc.textContent = data.description;
  locationTemp.textContent = data.currentConditions.temp;
}

function updateHighlightsDOM(data) {
  const mainTemperature = document.querySelector(".main-temperature");
  const mainHumidity = document.querySelector(".main-humidity");
  const mainWind = document.querySelector(".main-wind");
  const mainPrecipitation = document.querySelector(".main-precipitation");

  const subFeelsLike = document.querySelector(".sub-feels-like");
  const subSolarRadiation = document.querySelector(".sub-solar-radiation");
  const subUvInddex = document.querySelector(".sub-uv-index");
  const subPressure = document.querySelector(".sub-pressure");
  const subDew = document.querySelector(".sub-dew");
  const subVisibility = document.querySelector(".sub-visibility");

  mainTemperature.textContent = data.temp;
  mainHumidity.textContent = data.humidity;
  mainWind.textContent = data.windspeed;
  mainPrecipitation.textContent = data.precipprob;

  subFeelsLike.textContent = data.feelslike;
  subSolarRadiation.textContent = data.solarradiation;
  subUvInddex.textContent = data.uvindex;
  subPressure.textContent = data.pressure;
  subDew.textContent = data.dew;
  subVisibility.textContent = data.visibility;
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
    <div class="description">
    <h1>${getDayText(day.datetime)}</h1>
    <h3>${day.datetime}</h3>
    <h1>${day.temp} C</h1>
    <p>${day.conditions}</p>
    </div>`;

    const img = document.createElement("img");
    img.src = WEATHER_IMAGE[day.icon];
    img.alt = day.icon;
    img.classList.add("weather");
    dayContainer.prepend(img);

    weekForcastConatiner.appendChild(dayContainer);
  });
}

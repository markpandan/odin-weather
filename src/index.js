import "./styles/main.css";
import "./styles/placeholder.css";

import { VisualCrossingWeatherAPI } from "./utilities/retrieve.js";
import { API_KEY } from "./utilities/constants.js";
import { updateDOM } from "./utilities/domFunctions.js";
import { DEFAULT_DYNAMIC_DATE_URI } from "./utilities/constants.js";

const weather = new VisualCrossingWeatherAPI(API_KEY);
weather.setSubParameters({ unitGroup: "metric" });
weather.setSubParameters({ iconSet: "icons2" });

updateWeatherInformation();

const location = document.querySelector("#location");
// const locationBtn = document.querySelector("#location-btn");

location.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weather.setMainParameters(location.value, DEFAULT_DYNAMIC_DATE_URI);
    updateWeatherInformation();
  }
});

// locationBtn.addEventListener("click", () => {
//   weather.setMainParameters(location.value, DEFAULT_DYNAMIC_DATE_URI);
//   updateWeatherInformation();
// });

function updateWeatherInformation() {
  weather.fetchData().then((res) => {
    console.log(res);
    console.log(weather.URL);

    updateDOM(res);
  });
}

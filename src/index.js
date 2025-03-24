import "./styles.css";
import { VisualCrossingWeatherAPI } from "./helpers/retrieve";

// const location = document.querySelector("#location");
// const locationBtn = document.querySelector("#location-btn");

const API_KEY = "2GVKEVC38AZLFFAFL6Z9G4HYS";
const weather = new VisualCrossingWeatherAPI(API_KEY);
weather.setMainParameters("London", "today");
weather.setSubParameters({ lang: "es" });

weather.fetchData().then((res) => console.log(res));

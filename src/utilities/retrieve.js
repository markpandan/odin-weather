import { DEFAULT_DYNAMIC_DATE_URI, DEFAULT_LOCATION_URI } from "./constants.js";

// API Documentation: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/

// TODO: add "includes" for the subparameter to limit the weather data fetching
export class VisualCrossingWeatherAPI {
  constructor(API_KEY) {
    this.mainParams = [DEFAULT_LOCATION_URI, DEFAULT_DYNAMIC_DATE_URI].join(
      "/"
    );

    this.API_KEY = API_KEY;

    this.subParams = new URLSearchParams();
    this.subParams.append("key", API_KEY);

    this.URL;
  }

  async fetchData() {
    this.URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.mainParams}?${this.subParams}`;

    try {
      const response = await fetch(this.URL);
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  setMainParameters(location, ...args) {
    location = location ? encodeURI(location) : DEFAULT_LOCATION_URI;
    this.mainParams = [location];

    args.forEach((value) => {
      if (value) this.mainParams.push(value);
    });

    this.mainParams = this.mainParams.join("/");
  }

  setSubParameters(obj) {
    for (const [keys, values] of Object.entries(obj)) {
      this.subParams.append(keys, values);
    }
  }

  get url() {
    return this.URL;
  }
}

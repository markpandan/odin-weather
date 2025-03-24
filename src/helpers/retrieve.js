export class VisualCrossingWeatherAPI {
  constructor(API_KEY) {
    this.mainParams = ["United States"];

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
    this.mainParams = [location, ...args].join("/");
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

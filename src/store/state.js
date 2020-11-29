const currentWeatherDefault = {
  WeatherIcon: "",
  WeatherText: "",
  Temperature: {
    Metric: {
      Value: "",
      Unit: "",
    },
  },
};

const forcastDataDefult = {
  Temperature: {
    Maximum: { Value: "" },
    Minimum: { Value: "" },
  },
  Date: "",
};

const initialState = {
  selectedCity: null,
  favoriteCities: JSON.parse(localStorage.getItem("favoriteCityList")) || [],
  cities: [],
  selectedCityWeather: {
    forcast: [forcastDataDefult],
    currentWeather: currentWeatherDefault
  },
};
export default initialState;
import LocationService from "../../services/location-service";
import * as actionType from "./actionTypes";

export const getCities = (query) => {
  return (dispatch) => {
    LocationService.getLocationList(query).then((res) => {
      let list = [];
      if (res && res.length > 0) {
        list = res.map((city) => {
          return {
            key: city.Key,
            cityName: city.LocalizedName,
          };
        });
      }
      dispatch(setCityList(list));
    });
  };
};

const setCityList = (cityList) => {
  return {
    type: actionType.SET_CITIES,
    payload: cityList,
  };
};

export const setSelectedCity = (city) => {
  return {
    type: actionType.SET_SELECTED_CITY,
    payload: city
  };
};

export const getCityWeather = (city) => {
  return (dispatch) => {
    LocationService.getCityWeather(city.key).then((res) => {
      dispatch(setSelectedWeather(res));
    });
  };
};

export const getMultipleCityWeather = () => {
  return (dispatch, getState) => {
    LocationService.getMultipleCurrentWeather(
      getState().favoriteCities
    ).then((res) => dispatch(setMultipleCurrentWeather(res)));
  };
};

export const setMultipleCurrentWeather = (weatherList) => {
  return {
    type: actionType.SET_MULTIPLE_CITY_WEATHER,
    payload: weatherList,
  };
};

const setSelectedWeather = (data, key) => {
  return {
    type: actionType.SET_CITY_WEATHER,
    payload: {
      currentWeather: data[0],
      forcast: data[1],
    },
  };
};

export const toggleFavorites = (city) => {
  return {
    type: actionType.TOGGLE_FAVORITE,
    payload: city,
  };
};

export const getDefaultCityData = (coords) => {
  return (dispatch) => {
    LocationService.getDefaultCityData(coords).then((city) => {
      dispatch(getCityWeather(city));
      dispatch(setSelectedCity(city));
    });
  };
};

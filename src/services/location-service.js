import axios from "axios";
import { toast } from "react-toastify";

const locationKey = "dqKEOp4kl4jyshVvUMkefXTO3X3qBzSP";
const latLong = { latitude: 31.5227, longitude: 34.5956 };
function getLocationList(query) {
  let url =
    "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?";
  let params = `apikey=${locationKey}&q=${query}`;
  return axios
    .get(url + params)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      toast.error("faild to get location list");
    });
}

function getCityForcast(cityKey) {
  let url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
  let params = `${cityKey}?apikey=${locationKey}`;
  return axios
    .get(url + params)
    .then((res) => {
      return res.data.DailyForecasts;
    })
    .catch((error) => {
      toast.error(`faild to get city forcast data to city key ${cityKey}`);
    });
}

function getCityCurrentWeather(cityKey) {
  let url = "https://dataservice.accuweather.com/currentconditions/v1/";
  let params = `${cityKey}?apikey=${locationKey}`;
  return axios
    .get(url + params)
    .then((res) => {
      return res.data[0];
    })
    .catch((error) => {
      toast.error(`faild to get current weather data to city key ${cityKey}`);
    });
}

function getMultipleCurrentWeather(cityList) {
  let promises = cityList.map((city) => getCityCurrentWeather(city.key));
  return Promise.all(promises).then((res) => {
    let cityWeatherList = [];
    for (let i = 0; i < res.length; i++) {
      let city = {
        currentWeather: res[i],
        cityName: cityList[i].cityName,
        key: cityList[i].key,
      };
      cityWeatherList.push(city);
    }
    return cityWeatherList;
  }).catch(err => toast.error('faild to get favorite city wather data'));
}

function getCityWeather(cityKey) {
  let promises = [getCityCurrentWeather(cityKey), getCityForcast(cityKey)];
  return Promise.all(promises).then((res) => {
    return res;
  });
}

function getDefaultCityData(coords) {
  let coordData = coords ? coords : latLong;
  let url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?`;
  let params = `apikey=${locationKey}&q=${coordData.latitude},${coordData.longitude}`;
  return axios.get(url + params).then((res) => {
    return { key: res.data.Key, cityName: res.data.EnglishName };
  }).catch(err => toast.error('faild to get default city data'));
}

export default {
  getLocationList,
  getCityWeather,
  getMultipleCurrentWeather,
  getDefaultCityData,
};

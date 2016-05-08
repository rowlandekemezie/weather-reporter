import axios from 'axios';
const api_key = '&APPID=a2f6098455be483a037b58ef4ba1d37e';

const api = {};
api.GetWeatherForcast = function (city) {
  const forcast_url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}`;
  return axios.get(forcast_url + api_key);
};

api.GetWeatherDetails = function (city) {
  const weather_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}`;
  return axios.get(weather_url + api_key);
};

export default api;

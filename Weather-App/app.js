const weatherData = require("./getDataFromApi.js");

const weather_key = "89d717134cmsh4f1154ea8a49c28p1487f1jsn1c74fec48e30";

const location = "India";

weatherData.getCoordinates(location).then((coordinates) => {
  weatherData
    .getWeatherData(coordinates, weather_key)
    .then((data) => {
      console.log(data);
    });
});

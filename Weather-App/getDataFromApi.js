const axios = require("axios");

async function getData(options) {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return error;
  }
}

function getWeatherData({ latitude, longitude }, weather_key) {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${latitude},${longitude}` },
    headers: {
      "X-RapidAPI-Key": weather_key,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  return getData(options)
    .then((response) => {
      const dataObject = {};
      dataObject.date = response.headers.date;
      dataObject.temp = response.data.current.temp_c;
      dataObject.location = {
        name: response.data.location.name,
        region: response.data.location.region,
        country: response.data.location.country,
        timezone: response.data.location.tz_id,
        localtime: response.data.location.localtime,
      };
      dataObject.weather = {
        humidity: response.data.current.humidity,
        text: response.data.current.condition.text,
      };
      return dataObject;
    })
    .catch((error) => {
      return error;
    });
}

function getCoordinates(location) {
  let latLongObj = {};
  let requestOptions = {
    method: "GET",
  };
  return fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location}&apiKey=bbe6a89c58094b7189159d56940a7625`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      latLongObj.latitude = result.features[0].geometry.coordinates[0];
      latLongObj.longitude = result.features[0].geometry.coordinates[1];
      //   console.log(latLongObj);
      return latLongObj;
    })
    .catch((error) => {
      return error;
    });
}

module.exports = { getWeatherData, getCoordinates };

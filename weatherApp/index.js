const place = document.querySelector("#location");
const tbody = document.querySelector("tbody");
const showResult = document.querySelector(".result");

const key = "L5BCUD5MP4QHZFT43YEJ878G7";

// const place = "Delhi";

async function getWeather(key, place) {
  const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${key}`;
  let result = {};

  const response = await fetch(API);
  const jsonData = await response.json();

  result = {
    address: jsonData["resolvedAddress"],
    timezone: jsonData["timezone"],
    description: jsonData["description"],
    CurrentData: {
      date: jsonData["days"][0]["datetime"],
      currTemp: (jsonData["days"][0]["temp"] - 32) * (5/9).toFixed(2),
      currWeather: jsonData["days"][0]["conditions"],
    },
  };
  return result;
}

document.querySelector("form").addEventListener("click", (event) => {
  event.preventDefault();
  let innerHTML = "";
  getWeather(key, place.value).then((data) => {
    innerHTML = `<div class="card" style="width: 500px; margin-left: 32%;">
    <div class="card-header">
      Location : ${data.address}
    </div>
    <div class="card-body" style="text-align: left;">
      <p class="card-text">timezone : ${data.timezone}</p>
      <p class="card-text">description: ${data.description}</p>
      <p class="card-text">timezone : Asia/Kolkata</p>
      <p class="card-text">Temprature : ${data.CurrentData.currTemp} degree celcius</p>
      <p class="card-text">Current Weather : ${data.CurrentData.currWeather}</p>
    </div>
    <div class="card-footer" style="text-align: right;">
        ${data.CurrentData.date}
    </div>
  </div>`;
    showResult.innerHTML = innerHTML;
  });
});

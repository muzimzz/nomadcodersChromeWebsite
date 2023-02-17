const API_ID = "08c0790e6e3c3eb6074699142ecbb04b";
function onGeoOK(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const getGeoURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_ID}&units=metric`;
  // console.log(getGeoURL);
  fetch(getGeoURL)
    .then((res) => res.json())
    .then((data) => {
      
      const city = document.querySelector("#weather_div #city");
      city.innerHTML = `도시: ${data.name}<br>`;
      const weather = document.querySelector("#weather_div #weather");
      weather.innerHTML = `날씨: ${data.weather[0].main}<br>`;
      const degree = document.querySelector("#weather_div #degree");
      degree.innerHTML = `기온: ${Math.round(data.main.temp)}°C<br>`;
    });
}

function onGeoError() {
  console.log("ERR");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

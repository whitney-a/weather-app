function fetchTemperature(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector("h4").innerHTML = `${response.data.main.temp} °C`;
}

let formControl = document.querySelector("#formControl");
formControl.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  let apiKey = "e6c2364656962bdcb16bc352fc42569a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(fetchTemperature);
}

function getCurrentLocation(position) {
  let apiKey = "e6c2364656962bdcb16bc352fc42569a";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  document.querySelector(
    "h5"
  ).innerHTML = `Latitiude: ${lat} Longitude: ${lon}`;

  axios.get(apiUrl).then(fetchTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let button = document.querySelector("#currentBtn");
button.addEventListener("click", getCurrentPosition);

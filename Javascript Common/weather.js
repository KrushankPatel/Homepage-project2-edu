let x = document.getElementById('out');
let y = document.getElementById('temp');
let z = document.getElementById('weather-desc');
let w = document.getElementById('location');
let t = document.getElementById('weather-cont');

const iconBaseUrl = "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/font/";

let geolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    x.innerText = "Geo Not Supported"
  }
}

let showPosition = (data) => {
  let lat = data.coords.latitude
  let lon = data.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbf712a5a83d7305c3cda4ca8fe7ef29&units=metric`;

  fetch(url, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let cityName = data.name;
      let iconCode = data.weather[0].icon;
      let temp = `${Math.round(data.main.temp)}°C`;
      let desc = data.weather[0].description;

      y.innerHTML = temp;
      z.innerHTML = desc;
      w.innerHTML = `<div class="location"><i class="fa-solid fa-location-dot"></i>${cityName}</div>`;
      t.style.padding = `6px`;
      t.style.marginRight = `1.5rem`

      
      let iconClass;
      if (iconCode.startsWith("01")) {
        iconClass = "wi-day-sunny";
      } else if (iconCode.startsWith("02")) {
        iconClass = "wi-day-cloudy";
      } else if (iconCode.startsWith("03") || iconCode.startsWith("04")) {
        iconClass = "wi-cloudy";
      } else if (iconCode.startsWith("09") || iconCode.startsWith("10")) {
        iconClass = "wi-rain";
      } else if (iconCode.startsWith("11")) {
        iconClass = "wi-thunderstorm";
      } else if (iconCode.startsWith("13")) {
        iconClass = "wi-snow";
      } else {
        iconClass = "wi-day-sunny-overcast";
      }

     
      let iconElement = document.getElementById('weather-icon');
      iconElement.className = `wi ${iconClass}`;

    })

}

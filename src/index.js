import  {cityInput} from "./fetchImage.js";
import meteoLa from "./fetchCoor.js"
// import { DateTime, Settings } from "luxon";



const searchButton = document.getElementById("cityButt");




cityInput.value = "Taiwan";

const KeyPressed = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
  }
};

// const fetchCoordinates = () => {
//   fetch(
//     "https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value + "&limit=1&appid=" + data.key
//     )
//     .then(function (responseLat) {
//       if (!responseLat.ok) {
//         throw new Error(" Biiiiiiiiip " + response.status);
//       }
//       return responseLat.json();
//     })
//     .catch(error => { 
//       console.log(error)
//     })  
//     .then(function (responseLat) {
//       let lat = responseLat[0].lat;
      
//       let lon = responseLat[0].lon;
//       var nameCity = responseLat[0].name;
//       meteoLa(lat,lon, nameCity);
//       backgroundLa();
      
//     });
// };


// const fetchMeteo = (lat, lon, nameCity) => {
//   fetch( "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&exclude=minutely,alerts&mode=json&appid=" + data.key )
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Biiiiiiiip status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => { 
//       console.log(error)
//     })  
//     .then(function (response) {
//       document.getElementById("name-city").textContent = nameCity;
//       document.getElementById("current").textContent = parseInt(response.current.temp) + "";
      
//       fetchNameAndTemperature(response);
//       fetchIcons(response);
//       fetchPrecip(response);
//           });
// };

// const fetchPrecip = (response) => {
//   for (let index = 0; index < 4; index++) {
//     document.querySelectorAll(".popic")[index].textContent = parseInt(response.daily[index + 1].pop * 100) + " %";
//   }
// };

// const fetchIcons = (response) => {
//   const icons = document.querySelectorAll(".ic");
//   for (let i = 0; i < 4; i++) {
//   icons[i].src = "https://openweathermap.org/img/wn/" + response.daily[i + 1].weather[0].icon + "@2x.png";
//   if (response.daily[i + 1].weather[0].icon == "13d") {
//     icons[i].style.filter = " invert(100%)";
//    }
//   }
// };



// const fetchNameAndTemperature = (response) => 
// {for (let i = 0; i < 4; i++) {
//   const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//   let todayla = new Date();
//   let days = todayla.getDay() + 1;
//   let dayMax = days - 1 + i;
//   if (dayMax >= 7) {
//       dayMax = dayMax - 7;
//   }
//   document.querySelectorAll(".day-name")[i].textContent = daysOfWeek[dayMax];
//   console.log(response);
//   document.querySelectorAll(".temperature")[i].textContent = parseInt(response.daily[i + 1].temp.day) + "°";
// }

// };

window.onload = meteoLa
cityInput.addEventListener("keyup", KeyPressed);
searchButton.addEventListener("click", meteoLa);


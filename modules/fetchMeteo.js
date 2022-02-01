
export const cityInput = document.getElementById("city");
import {data} from "./config.js"

const imgFishing = () => {
    fetch("https://api.unsplash.com/search/photos?query=" + cityInput.value + "&per_page=20&client_id=" + data.unsplkey )
      .then(function (unsplashResponse) {
        if (!unsplashResponse.ok) {
          throw new Error( `HTTP error! Biiiiiiiiiiiip status: ${unsplashResponse.status}`
          );
        }
        return unsplashResponse.json();
      })
      .catch(error => { 
        console.log(error)
      })  
      //If style not backgroundimage but just background the cover property wont work !!!!
      .then(function (unsplashResponse) {
        const imgArraySize = unsplashResponse.results.length;
        const choise = Math.floor(Math.random() * imgArraySize);
        document.getElementById("bodybackA").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, .7), rgba(255,255,255,0.5)), " + "url('" + unsplashResponse.results[choise - 1].urls.small + ")";
        document.getElementById("foot").textContent = "Unsplash  license : " + unsplashResponse.results[choise - 1].user.name + "\n" + unsplashResponse.results[choise - 1].user.links.html; });
     
  };
  export  { imgFishing as default }
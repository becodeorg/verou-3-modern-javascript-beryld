/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\n  key: '7be3737d498e045a3e644d252365123e',\n  keyhere: 'HL5Wf8jfhXR8H0ucVXS1GJpFFXopWAITBCZ3jX8oIx4',\n  unsplkey: '53pwftuU-Hne0C71r8jjZLCnCL5To-B2aj0Be7WRJFw'\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/config.js?");

/***/ }),

/***/ "./src/fetchCoor.js":
/*!**************************!*\
  !*** ./src/fetchCoor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCoordinates)\n/* harmony export */ });\n/* harmony import */ var _fetchImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchImage.js */ \"./src/fetchImage.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\n\n\nconst fetchCoordinates = () => {\n  fetch(\"https://api.openweathermap.org/geo/1.0/direct?q=\" + _fetchImage_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.value + \"&limit=1&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_1__.data.key).then(function (responseLat) {\n    if (!responseLat.ok) {\n      throw new Error(\" Biiiiiiiiip \" + response.status);\n    }\n\n    return responseLat.json();\n  }).catch(error => {\n    console.log(error);\n  }).then(function (responseLat) {\n    let lat = responseLat[0].lat;\n    let lon = responseLat[0].lon;\n    var nameCity = responseLat[0].name;\n    fetchMeteo(lat, lon, nameCity);\n    (0,_fetchImage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\nconst fetchMeteo = (lat, lon, nameCity) => {\n  fetch(\"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&units=metric&exclude=minutely,alerts&mode=json&appid=\" + _config_js__WEBPACK_IMPORTED_MODULE_1__.data.key).then(function (response) {\n    if (!response.ok) {\n      throw new Error(`HTTP error! Biiiiiiiip status: ${response.status}`);\n    }\n\n    return response.json();\n  }).catch(error => {\n    console.log(error);\n  }).then(function (response) {\n    document.getElementById(\"name-city\").textContent = nameCity;\n    document.getElementById(\"current\").textContent = parseInt(response.current.temp) + \"\";\n    fetchNameAndTemperature(response);\n    fetchIcons(response);\n    fetchPrecip(response);\n  });\n};\n\nconst fetchNameAndTemperature = response => {\n  for (let i = 0; i < 4; i++) {\n    const daysOfWeek = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"];\n    let todayla = new Date();\n    let days = todayla.getDay() + 1;\n    let dayMax = days - 1 + i;\n\n    if (dayMax >= 7) {\n      dayMax = dayMax - 7;\n    }\n\n    document.querySelectorAll(\".day-name\")[i].textContent = daysOfWeek[dayMax];\n    console.log(response);\n    document.querySelectorAll(\".temperature\")[i].textContent = parseInt(response.daily[i + 1].temp.day) + \"°\";\n  }\n};\n\nconst fetchPrecip = response => {\n  for (let index = 0; index < 4; index++) {\n    document.querySelectorAll(\".popic\")[index].textContent = parseInt(response.daily[index + 1].pop * 100) + \" %\";\n  }\n};\n\nconst fetchIcons = response => {\n  const icons = document.querySelectorAll(\".ic\");\n\n  for (let i = 0; i < 4; i++) {\n    icons[i].src = \"https://openweathermap.org/img/wn/\" + response.daily[i + 1].weather[0].icon + \"@2x.png\";\n\n    if (response.daily[i + 1].weather[0].icon == \"13d\") {\n      icons[i].style.filter = \" invert(100%)\";\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/fetchCoor.js?");

/***/ }),

/***/ "./src/fetchImage.js":
/*!***************************!*\
  !*** ./src/fetchImage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cityInput\": () => (/* binding */ cityInput),\n/* harmony export */   \"default\": () => (/* binding */ imgFishing)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\nconst cityInput = document.getElementById(\"city\");\n\n\nconst imgFishing = () => {\n  fetch(\"https://api.unsplash.com/search/photos?query=\" + cityInput.value + \"&per_page=20&client_id=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__.data.unsplkey).then(function (unsplashResponse) {\n    if (!unsplashResponse.ok) {\n      throw new Error(`HTTP error! Biiiiiiiiiiiip status: ${unsplashResponse.status}`);\n    }\n\n    return unsplashResponse.json();\n  }).catch(error => {\n    console.log(error);\n  }) //If style not backgroundimage but just background the cover property wont work !!!!\n  .then(function (unsplashResponse) {\n    const imgArraySize = unsplashResponse.results.length;\n    const choise = Math.floor(Math.random() * imgArraySize);\n    document.getElementById(\"bodybackA\").style.backgroundImage = \"linear-gradient(rgba(255, 255, 255, .7), rgba(255,255,255,0.5)), \" + \"url('\" + unsplashResponse.results[choise - 1].urls.small + \")\";\n    document.getElementById(\"foot\").textContent = \"Unsplash  license : \" + unsplashResponse.results[choise - 1].user.name + \"\\n\" + unsplashResponse.results[choise - 1].user.links.html;\n  });\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/fetchImage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchImage.js */ \"./src/fetchImage.js\");\n/* harmony import */ var _fetchCoor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchCoor.js */ \"./src/fetchCoor.js\");\n\n\nconst searchButton = document.getElementById(\"cityButt\");\n_fetchImage_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.value = \"Taiwan\";\n\nconst KeyPressed = event => {\n  if (event.key === \"Enter\") {\n    event.preventDefault();\n    searchButton.click();\n  }\n}; // const fetchCoordinates = () => {\n//   fetch(\n//     \"https://api.openweathermap.org/geo/1.0/direct?q=\" + cityInput.value + \"&limit=1&appid=\" + data.key\n//     )\n//     .then(function (responseLat) {\n//       if (!responseLat.ok) {\n//         throw new Error(\" Biiiiiiiiip \" + response.status);\n//       }\n//       return responseLat.json();\n//     })\n//     .catch(error => { \n//       console.log(error)\n//     })  \n//     .then(function (responseLat) {\n//       let lat = responseLat[0].lat;\n//       let lon = responseLat[0].lon;\n//       var nameCity = responseLat[0].name;\n//       meteoLa(lat,lon, nameCity);\n//       backgroundLa();\n//     });\n// };\n// const fetchMeteo = (lat, lon, nameCity) => {\n//   fetch( \"https://api.openweathermap.org/data/2.5/onecall?lat=\" + lat + \"&lon=\" + lon + \"&units=metric&exclude=minutely,alerts&mode=json&appid=\" + data.key )\n//     .then(function (response) {\n//       if (!response.ok) {\n//         throw new Error(`HTTP error! Biiiiiiiip status: ${response.status}`);\n//       }\n//       return response.json();\n//     })\n//     .catch(error => { \n//       console.log(error)\n//     })  \n//     .then(function (response) {\n//       document.getElementById(\"name-city\").textContent = nameCity;\n//       document.getElementById(\"current\").textContent = parseInt(response.current.temp) + \"\";\n//       fetchNameAndTemperature(response);\n//       fetchIcons(response);\n//       fetchPrecip(response);\n//           });\n// };\n// const fetchPrecip = (response) => {\n//   for (let index = 0; index < 4; index++) {\n//     document.querySelectorAll(\".popic\")[index].textContent = parseInt(response.daily[index + 1].pop * 100) + \" %\";\n//   }\n// };\n// const fetchIcons = (response) => {\n//   const icons = document.querySelectorAll(\".ic\");\n//   for (let i = 0; i < 4; i++) {\n//   icons[i].src = \"https://openweathermap.org/img/wn/\" + response.daily[i + 1].weather[0].icon + \"@2x.png\";\n//   if (response.daily[i + 1].weather[0].icon == \"13d\") {\n//     icons[i].style.filter = \" invert(100%)\";\n//    }\n//   }\n// };\n// const fetchNameAndTemperature = (response) => \n// {for (let i = 0; i < 4; i++) {\n//   const daysOfWeek = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"];\n//   let todayla = new Date();\n//   let days = todayla.getDay() + 1;\n//   let dayMax = days - 1 + i;\n//   if (dayMax >= 7) {\n//       dayMax = dayMax - 7;\n//   }\n//   document.querySelectorAll(\".day-name\")[i].textContent = daysOfWeek[dayMax];\n//   console.log(response);\n//   document.querySelectorAll(\".temperature\")[i].textContent = parseInt(response.daily[i + 1].temp.day) + \"°\";\n// }\n// };\n\n\nwindow.onload = _fetchCoor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n_fetchImage_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.addEventListener(\"keyup\", KeyPressed);\nsearchButton.addEventListener(\"click\", _fetchCoor_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
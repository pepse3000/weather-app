import { Converter } from "./converter";
import { RequestHandler } from "./requesthandler";
import snow from "../icons/rain.png";
import rain from "../icons/rain.png";
import fog from "../icons/cloudy.png";
import wind from "../icons/cloudy.png";
import cloudy from "../icons/cloudy.png";
import partlyCloudyDay from "../icons/sunny2.png";
import partlyCloudyNight from "../icons/nightcloudy2.png"
import clearDay from "../icons/clear.png";
import clearNight from "../icons/night.png";
import nightPhoto from "../icons/paulo-carrolo-YcBmccmIIww-unsplash.jpg"

export const DomHandler = (function() {
  const displayIcons = {
    snow: snow,
    rain: rain,
    fog: fog,
    wind: wind,
    cloudy: cloudy,
    "partly-cloudy-day": partlyCloudyDay,
    "partly-cloudy-night": partlyCloudyNight,
    "clear-day": clearDay,
    "clear-night": clearNight,
  };

  const getInputValue = () => {
    return document.querySelector('#search-input').value;
  }

  const displayData = (data) => {

    const countryName = document.querySelector('#country');
    const cityName = document.querySelector('#city');

    countryName.textContent = data.resolvedAddress.split(',')[data.resolvedAddress.split(',').length - 1];
    cityName.textContent = data.address;

    const todayDate = document.querySelector("#date");
    todayDate.textContent = Converter.getFullDate(new Date());

    const temp = document.querySelector(".temperature");
    const status = document.querySelector(".status");
    temp.textContent = Converter.farenheitToCelsius(data.currentDayInfo.temp);
    status.textContent = data.currentDayInfo.conditions;

    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.style.background = `url(${displayIcons[data.currentDayInfo.icon]})`;
    weatherIcon.style.backgroundSize = "contain";
    weatherIcon.style.backgroundPosition = "center";
    weatherIcon.style.backgroundRepeat = "no-repeat";

    let infoRows = document.querySelectorAll(".info-row");

    infoRows[0].innerHTML = `
      <div class="img-holder"></div>
      <p>Humidity</p>
      <p>${data.currentDayInfo.humidity} %</p>`
    
    infoRows[1].innerHTML = `
      <div class="img-holder"></div>
      <p>Feels like</p>
      <p>${Converter.farenheitToCelsius(data.currentDayInfo.feelslike)} °C</p>`

    infoRows[2].innerHTML = `
      <div class="img-holder"></div>
      <p>Wind</p>
      <p>${data.currentDayInfo.windspeed} m/s</p>`

    displayTodayByHour(data);
    assignTodayClick(data);
    assignTomorrowClick(data);
    assignNext7Click(data);
  }

  const displayTodayByHour = (data) => {
    let byHourContainer = document.querySelector(".by-hour-forecast");
    byHourContainer.innerHTML = "";

    if (new Date().getHours() >= 19) {
      document.body.style.background = `url(${nightPhoto})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.height = "100vh";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.overflow = "hidden";

      let container = document.querySelector(".container");
      container.classList.remove("day");
      container.classList.add("night");
    }

    data.currentDayInfo.hours.slice(new Date().getHours() - 1, 24).forEach((hour) => {
      const div = document.createElement("div");
      div.classList.add("hour-element");

      div.innerHTML = `
        <p class="hour">${+hour.datetime.slice(0, 2) == new Date().getHours() ? "Now" : hour.datetime.slice(0, 5)}</p>
        <div class="img-holder"></div>
        <p>${Converter.farenheitToCelsius(hour.temp)} °C</p>
      `;
      const icon = div.querySelector(".img-holder");
      icon.style.background = `url(${displayIcons[hour.icon]})`;
      icon.style.backgroundSize = "contain";
      icon.style.backgroundPosition = "center";
      icon.style.backgroundRepeat = "no-repeat";
      byHourContainer.appendChild(div);
    });
  }

  const displayTomorrowByHour = (data) => {
    let byHourContainer = document.querySelector(".by-hour-forecast");

    byHourContainer.innerHTML = "";

    data.daysArray[0].hours.forEach((hour) => {
      const div = document.createElement("div");
      div.classList.add("hour-element");

      div.innerHTML = `
        <p class="hour">${hour.datetime.slice(0, 5)}</p>
        <div class="img-holder"></div>
        <p>${Converter.farenheitToCelsius(hour.temp)} °C</p>
      `;
      const icon = div.querySelector(".img-holder");
      icon.style.background = `url(${displayIcons[hour.icon]})`;
      icon.style.backgroundSize = "contain";
      icon.style.backgroundPosition = "center";
      icon.style.backgroundRepeat = "no-repeat";
      byHourContainer.appendChild(div);
    });
  }

  const displayNext7Days = (data) => {
    let byHourContainer = document.querySelector(".by-hour-forecast");

    byHourContainer.innerHTML = "";

    data.daysArray.forEach(day => {
      const div = document.createElement("div");
      div.classList.add("hour-element");

      div.innerHTML = `
        <p class="hour">${day.datetime.slice(5).split("-")[0]}.${day.datetime.slice(5).split("-")[1]}</p>
        <div class="img-holder"></div>
        <p>${Converter.farenheitToCelsius(day.temp)} °C</p>
      `;
      const icon = div.querySelector(".img-holder");
      icon.style.background = `url(${displayIcons[day.icon]})`;
      icon.style.backgroundSize = "contain";
      icon.style.backgroundPosition = "center";
      icon.style.backgroundRepeat = "no-repeat";
      byHourContainer.appendChild(div);
    })
  }

  const assignEnterClick = () => {
    const input = document.querySelector("input");

    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        RequestHandler.makeRequest(input.value);
      }
    });
  }

  const assignTodayClick = (data) => {
    const button = document.querySelector("#today");

    button.addEventListener("click", () => {
      displayTodayByHour(data);
    });
  }

  const assignTomorrowClick = (data) => {
    const button = document.querySelector("#tomorrow");

    button.addEventListener("click", () => {
      displayTomorrowByHour(data);
    });
  }

  const assignNext7Click = (data) => {
    const button = document.querySelector("#next7");

    button.addEventListener("click", () => {
      displayNext7Days(data);
    });
  }

  return {
    getInputValue,
    displayData,
    assignEnterClick,
    displayTomorrowByHour,
  }
})();
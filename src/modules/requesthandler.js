import { DomHandler } from './domhandler.js';

export const RequestHandler = (function() {
  const requestUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const apiKey = "V8AB8JYQSBKAY28E63RHLNLZW";

  const makeRequest = (inputValue) => {
    fetch(`${requestUrl}${inputValue}?key=${apiKey}`, {
      mode: 'cors',
    })
    .then(response => response.json())
    .then(data => parseRequest(data))
    .then(parsedData => DomHandler.displayData(parsedData))
    .catch(error => console.error('Error:', error));
  }

  const parseRequest = (data) => {

    console.log(data);

    let resolvedAddress = data.resolvedAddress;
    let address = data.address;
    let currentConditions = data.currentConditions;
    let localTime = currentConditions.datetime;

    let currentDayInfo = {
      feelslike: currentConditions.feelslike,
      temp: currentConditions.temp,
      humidity: currentConditions.humidity,
      windspeed: currentConditions.windspeed,
      dew: currentConditions.dew,
      icon: currentConditions.icon,
      conditions: currentConditions.conditions,
      hours: data.days[0].hours,
    }

    let daysArray = data.days.slice(1, 8);

    return { resolvedAddress, address, localTime, currentDayInfo, daysArray };
  }

  return {
    makeRequest,
    parseRequest
  };
})();
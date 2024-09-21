export const Converter = (function() {
  const farenheitToCelsius = (farenheit) => {
    return Math.round((farenheit - 32) * 5 / 9);
  }

  const getFullDate = (date) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let todayDate = new Date(date);
    
    return `${days[todayDate.getDay()]}, ${months[todayDate.getMonth()]} ${todayDate.getDate()}`;
  }

  return {
    farenheitToCelsius,
    getFullDate
  }
})();
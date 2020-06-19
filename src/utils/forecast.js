const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=7da19515dfbd0d89302cdb581eb8ba46";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service.");
    } else if (body.cod === "400") {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temp +
          " degree celcius out. There is " +
          body.current.clouds +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;

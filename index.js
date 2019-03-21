var weather = require('./weather');

weather.getWeather(function (data) {
    console.log('В городе ' + data.name + ' сейчас ' + data.weather[0].description);
})

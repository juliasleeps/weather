var unirest = require('unirest');

module.exports.getWeather = function(cb){
    unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?lang=ru&units=%22metric%22&q=Dnipro%2Cua")
        .header("X-RapidAPI-Key", "4898acb58cmsh05dc9497f7f45d8p14a85ajsn49e4713b532e")
        .end(function (result) {
            if(result.status === 200){
                return cb(result.body); 
            } else {
                console.log('Can not find info')
            }
        });
}

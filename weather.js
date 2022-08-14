let ipGeolocationApiKey = "3d6373a802e1443dbe7175394ad04919";
let weatherApiKey = "f586ea1b10dd427585f91209220908";

fetch("https://api.ipgeolocation.io/ipgeo?apiKey=" + ipGeolocationApiKey).then((response) => {
    return response.json();
}).then((data) => {
    return data.ip;
}).then((ipAddress) => {
    let apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
    let apiUrlEnd = "&aqi=yes";
    return fetch(apiUrl + weatherApiKey + "&q=" + ipAddress + apiUrlEnd);
}).then((response) => {
    return response.json();
}).then((weatherData) => {
    let locationElement = document.getElementById("location");
    locationElement.textContent = weatherData.location.region + ", " + weatherData.location.country;
    
    let coordinatesElement = document.getElementById("coordinates");
    coordinatesElement.textContent = Math.abs(parseFloat(weatherData.location.lat));
    coordinatesElement.textContent += "°";
    coordinatesElement.textContent += (parseFloat(weatherData.location.lat) > 0) ? "N" : "S";
    coordinatesElement.textContent += ", ";
    coordinatesElement.textContent += Math.abs(parseFloat(weatherData.location.lon));
    coordinatesElement.textContent += "°";
    coordinatesElement.textContent += (parseFloat(weatherData.location.lon) > 0) ? "E" : "W";
    
    let weatherImgElement = document.getElementById("weather-img");
    weatherImgElement.src = "https:" + weatherData.current.condition.icon;

    let weatherDescElement = document.getElementById("weather-description");
    weatherDescElement.textContent = weatherData.current.condition.text;

    let temperatureElement = document.getElementById("temperature");
    temperatureElement.textContent = weatherData.current.temp_c + "° C";
    
    let feelsLikeElement = document.getElementById("feels-like");
    feelsLikeElement.textContent = weatherData.current.feelslike_c + "° C";

    let uvElement = document.getElementById("uv");
    uvElement.textContent = weatherData.current.uv;

    let precipitationElement = document.getElementById("precipitation");
    precipitationElement.textContent = weatherData.current.precip_in + " Inches";

    let cloudCoverElement = document.getElementById("cloud-cover");
    cloudCoverElement.textContent = weatherData.current.cloud + "%";

    let humidityElement = document.getElementById("humidity");
    humidityElement.textContent = weatherData.current.humidity + "%";

    let windSpeedElement = document.getElementById("wind-speed");
    windSpeedElement.textContent = weatherData.current.wind_kph + " km/h";

    let windDirElement = document.getElementById("wind-direction");
    windDirElement.textContent = weatherData.current.wind_dir;

    let aqiElement = document.getElementById("aqi");
    aqiElement.textContent = weatherData.current.air_quality["us-epa-index"];
});

//API RESPONSE FORMAT
// {
//     "location": {
//         "name": "Dilli",
//         "region": "Delhi",
//         "country": "India",
//         "lat": 28.67,
//         "lon": 77.22,
//         "tz_id": "Asia/Kolkata",
//         "localtime_epoch": 1660382475,
//         "localtime": "2022-08-13 14:51"
//     },
//     "current": {
//         "last_updated_epoch": 1660382100,
//         "last_updated": "2022-08-13 14:45",
//         "temp_c": 33.0,
//         "temp_f": 91.4,
//         "is_day": 1,
//         "condition": {
//             "text": "Mist",
//             "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
//             "code": 1030
//         },
//         "wind_mph": 8.1,
//         "wind_kph": 13.0,
//         "wind_degree": 120,
//         "wind_dir": "ESE",
//         "pressure_mb": 1000.0,
//         "pressure_in": 29.53,
//         "precip_mm": 0.0,
//         "precip_in": 0.0,
//         "humidity": 59,
//         "cloud": 75,
//         "feelslike_c": 36.3,
//         "feelslike_f": 97.3,
//         "vis_km": 4.0,
//         "vis_miles": 2.0,
//         "uv": 7.0,
//         "gust_mph": 13.4,
//         "gust_kph": 21.6,
//         "air_quality": {
//             "co": 767.7000122070312,
//             "no2": 27.100000381469727,
//             "o3": 108.69999694824219,
//             "so2": 52.900001525878906,
//             "pm2_5": 57.5,
//             "pm10": 63.70000076293945,
//             "us-epa-index": 3,
//             "gb-defra-index": 7
//         }
//     }
// }
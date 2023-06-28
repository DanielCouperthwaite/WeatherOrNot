import { useEffect, useState } from "react"

const WeatherInfo = ({searchTerm}) => {

const [weatherInfo, setWeatherInfo] = useState([])

useEffect(() => {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${searchTerm}&key=b3051d40ff1b44b187f2bc188f41e45e`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        setWeatherInfo(data.data[0])
    });
}, [searchTerm])

return (
    <>
        <section className="weather-info" id="weather-info">
            <p>{weatherInfo.city_name}, {weatherInfo.country_code}</p>
            <h2>{weatherInfo['temp']} °C</h2>
            <p>Feels like {weatherInfo['app_temp']} °C</p>
            <p>{(Math.floor(weatherInfo['precip'])/1000)} mm/hr Precipitation</p>
            <p>{weatherInfo['wind_spd']} km/h Wind {weatherInfo['wind_cdir']}</p>
            <p>Sunrise: {weatherInfo.sunrise}</p>
            <p>Sunset: {weatherInfo.sunset}</p>
        </section>
    </>
    )
}

export default WeatherInfo
import { useEffect, useState } from "react"


const WeatherInfo = ({searchTerm}) => {

const [weatherInfo, setWeatherInfo] = useState([])
const [isLoading, setIsLoading] = useState(true);



console.log('terms', searchTerm);
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${searchTerm}&aqi=no`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('data', data.location.name);
            console.log(import.meta.env.VITE_API_KEY, searchTerm);
            console.log('state1', weatherInfo);
            setWeatherInfo(data)
            setIsLoading(false)
        })
    }, [searchTerm])
    
    // const cityName= weatherInfo.location.name;

    return (
        <>
            <section className="weather-info" id="weather-info">
                <p>{isLoading === true ? 'true' : 'false'}</p>
                {/* <h2>{weatherInfo['temp']} °C</h2>
                <p>Feels like {weatherInfo['app_temp']} °C</p>
                <p>{(Math.floor(weatherInfo['precip'])/1000)} mm/hr Precipitation</p>
                <p>{weatherInfo['wind_spd']} km/h Wind {weatherInfo['wind_cdir']}</p>
                <p>Sunrise: {weatherInfo.sunrise}</p>
                <p>Sunset: {weatherInfo.sunset}</p> */}
            </section>
        </>
        )
}

export default WeatherInfo
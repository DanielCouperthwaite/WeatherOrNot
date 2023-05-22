import { useEffect, useState } from "react"

const WeatherInfo = ({searchTerm}) => {

    

    const [weatherInfo, setWeatherInfo] = useState([])

    
    console.log(searchTerm)

    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${searchTerm}&key=a5c52b519b3142cbbefba91278797339`)
        .then((res) => {
        
            return res.json()
        })
        .then((data) => {
            setWeatherInfo(data.data[0])
            console.log(weatherInfo)
        });
    }, [searchTerm])

 

    return (
        <>
            <div className="weather-info">
                <p>{weatherInfo.city_name}</p>
                {/* {console.log({weatherInfo[0].data[0]['temp']}}) */}
                <h2>{weatherInfo['temp']} °C</h2>
                <p>Feels like {weatherInfo['app_temp']} °C</p>
                {/* <p>{weatherInfo['weather'].description}</p> */}
                <p>{(Math.floor(weatherInfo['precip'])/1000)} mm/hr Precipitation</p>
                <p>{weatherInfo['wind_spd']} km/h Wind {weatherInfo['wind_cdir']}</p>
                <p>Sunrise: {weatherInfo.sunrise}</p>
                <p>Sunset: {weatherInfo.sunset}</p>
            </div>
        </>
    )
}

export default WeatherInfo
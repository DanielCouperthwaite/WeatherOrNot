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
            console.log(searchTerm)
            console.log(searchTerm)
            console.log('data', data.location.name);
            console.log(import.meta.env.VITE_API_KEY, searchTerm);
            console.log('state1', weatherInfo);
            setWeatherInfo(data)
            setIsLoading(false)
        })
    }, [searchTerm])

    return (
        <>
            <section className="weather-info" id="weather-info">
                
                <p>{isLoading === true ? 'true' : weatherInfo['location']['name']}, {isLoading === true ? 'true' : weatherInfo['location']['country']}  <p>{isLoading === true ? 'true' : weatherInfo['location']['localtime']}</p></p>
                <img src={isLoading === true? 'true' : weatherInfo['current']['condition']['icon']}></img>
                <h2>{isLoading === true ? 'true' : weatherInfo['current']['temp_c']} °C</h2>
                <p>Feels Like {isLoading === true ? 'true' : weatherInfo['current']['feelslike_c']} °C</p>
                <p>{isLoading === true ? 'true' : weatherInfo['current']['condition']['text']}</p>
                <p>UV: {isLoading === true ? 'true' : weatherInfo['current']['uv']}</p>
                <p>Wind Speed: {isLoading === true ? 'true' : weatherInfo['current']['wind_mph']}mph</p>
                <p>Humidity: {isLoading === true ? 'true' : weatherInfo['current']['humidity']}%</p>
                <p>Last Updated: {isLoading === true ? 'true' : weatherInfo['current']['last_updated']}</p>
            </section>
        </>
        )
}

export default WeatherInfo
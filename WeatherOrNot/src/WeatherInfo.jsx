import { useEffect, useState } from "react"

const WeatherInfo = ({weatherInfo, setWeatherInfo}) => {

    // const [city, setCity] = useState(["Raleigh"])


    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=london&key=a5c52b519b3142cbbefba91278797339`)
        .then((res) => {
        
            return res.json()
        })
        .then((data) => {
            console.log('line 15 data', data.data[0]['temp'])
            //data is now london
            setWeatherInfo(data.data[0])
            console.log(weatherInfo)
        });
    }, [])

 

    return (
        <>
            <div className="weather-info">
                <h2>london</h2>
                {/* {console.log({weatherInfo[0].data[0]['temp']}}) */}
                <p>{weatherInfo['temp']}</p>
                {/* <p>{weatherInfo['weather'].description}</p> */}
            </div>
        </>
    )
}

export default WeatherInfo
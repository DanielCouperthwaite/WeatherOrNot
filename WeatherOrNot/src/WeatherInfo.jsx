import { useEffect, useState } from "react"

const WeatherInfo = ({weatherInfo, setWeatherInfo}) => {

    // const [city, setCity] = useState(["Raleigh"])


    useEffect(() => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=london&key=a5c52b519b3142cbbefba91278797339`)
        .then((res) => {
        
            return res.json()
        })
        .then((data) => {
            console.log('line 15 data', data)
            //data is now london
            setWeatherInfo(data)
        });
    }, [])

    console.log('weatherinfo', weatherInfo[1][0])

    return (
        <>
            <div className="weather-info">
                <h2>london</h2>
               {console.log('the thing we want', weatherInfo.data)}
                {/* {console.log({weatherInfo[0].data[0]['temp']}}) */}
                {/* <p>{weatherInfo['weather'].icon}</p>
                <p>{weatherInfo['weather'].description}</p> */}
            </div>
        </>
    )
}

export default WeatherInfo
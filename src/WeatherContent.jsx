import { useState } from 'react'
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';


const WeatherContent = () => {

    const [searchTerm, setSearchTerm] = useState('manchester')

    return (
        <>
            <section className='weather-content' id='weather-content'>
                <WeatherSearch setSearchTerm={setSearchTerm}/>
                <WeatherInfo searchTerm={searchTerm}/>
            </section>
        </>
    )
}

export default WeatherContent;

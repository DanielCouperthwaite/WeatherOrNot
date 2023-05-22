import { useState } from 'react'
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';


const WeatherContent = () => {

const [searchTerm, setSearchTerm] = useState('toronto')

    return (
        <>
            <div>
                <WeatherSearch setSearchTerm={setSearchTerm}/>
                <WeatherInfo searchTerm={searchTerm}/>
            </div>
        
        </>
    )


}

export default WeatherContent;

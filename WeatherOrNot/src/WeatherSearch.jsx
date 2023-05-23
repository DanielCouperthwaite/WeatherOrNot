import { useState } from 'react';

const WeatherSearch = ({ setSearchTerm }) => {

const [newSearchTerm, setNewSearchTerm] = useState('')

const handleSubmit = (event) => {
event.preventDefault();
setSearchTerm(newSearchTerm)
}
   
    return (
        <>
        <form className="weather-search" onSubmit={handleSubmit} id='weather-search-bar'>
            <input 
                type='text' 
                placeholder='eg. Toronto'
                value={newSearchTerm}
                onChange={(event) => {
                    setNewSearchTerm(event.target.value)
                }}
                id='weather-search-text-box'
                aria-label='Search by City'
            />
            <label htmlFor='weather-search-text-box'></label>
            <button style={{marginLeft: '10px'}} aria-label='Search by City'>Search</button>
        </form>
        </>
    )  
}

export default WeatherSearch;
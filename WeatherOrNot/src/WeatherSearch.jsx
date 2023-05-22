import { useState } from 'react';

const WeatherSearch = ({ setSearchTerm }) => {
   
    const [newSearchTerm, setNewSearchTerm] = useState('')

   const handleSubmit = (event) => {
    event.preventDefault();

    setSearchTerm(newSearchTerm)
   }
   
    return (
        <>
        <form className="weather-search" onSubmit={handleSubmit}>
        
            <input 
                type='text' 
                placeholder='eg. Toronto'
                value={newSearchTerm}
                onChange={(event) => {
                    console.log(event.target.value)
                    setNewSearchTerm(event.target.value)
                }}
            />
            <button style={{marginLeft: '10px'}}>Search</button>

        </form>
        </>
    )
    
   
}

export default WeatherSearch
import React from 'react'
import './SearchBar.css'

const SearchBar = ({setCity, searchLocation}) => {

    return <div className="search">
        <input 
            type="text" 
            onChange={(event) => setCity(event.target.value)} 
            className="search-bar" 
            placeholder='Enter Location'
            onKeyPress={searchLocation} />
    </div>
}

export default SearchBar
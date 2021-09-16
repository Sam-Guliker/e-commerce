import React, { useState } from 'react';

export default function SearchInput() {
    const [value, setValue] = useState('')
    const searchInput = (e) => {
        setValue(e.currentTarget.value)
    }
    
    return (
        <input 
            onChange={searchInput} 
            id="Search" 
            type="text" 
            placeholder="Search.."
            className="search-input">            
        </input>
    )
}
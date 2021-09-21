import React, { useState } from 'react';

export default function SearchInput({search, setSearch}) {
    
    return (
        <input 
            onChange={(e) => setSearch(e.target.value.toLowerCase())} 
            id="Search" 
            type="text" 
            placeholder="Search.."
            className="search-input">            
        </input>
    )
}
import React, { useState } from 'react';
import Sort from './Sort';
import FilterOptions from './FilterOptions';

export default function Aside() {
    return (
        <div className="aside-container">
            <Sort/>
            <FilterOptions/>
        </div>
    )
}
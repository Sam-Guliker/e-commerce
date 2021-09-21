import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu'

export default function FilterOptions() {
    const [selectedFilters, setSelectedFilters] = useState({
        shoeType: 'Shoe Type',
        styleOptions: 'Style',
        sizeOptions: 'Size',
        brands: 'Brand',
        priceRanges: 'Price Range',
    })

    const shoeType = []
    const styleOptions = []
    const sizeOptions = []
    const brands = []
    const priceRanges = []

    return(
        <div className="filter-container">
            <h2 className="heading-03">Filter</h2>
            <DropDownMenu shoeType={shoeType} selectedFilters={selectedFilters}  setSelectedFilters={setSelectedFilters} />
            <DropDownMenu styleOptions={styleOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <DropDownMenu sizeOptions={sizeOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <DropDownMenu brands={brands} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <DropDownMenu priceRanges={priceRanges} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        </div>
    )
}
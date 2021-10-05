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

    const shoeType = ['type-one', 'type-two']
    const sizeOptions = [41,42,43,44,45]
    const brands = ['Adidas', 'Balenciaga', 'Nike', 'Reebok', 'Calvin. K']
    const priceRanges = ['Lowest to Highest', 'Highest to Lowest']

    return(
        <div className="filter-container">
            <h2 className="heading-03">Filter</h2>
            <DropDownMenu shoeType={shoeType} selectedFilters={selectedFilters}  setSelectedFilters={setSelectedFilters} />
            <DropDownMenu sizeOptions={sizeOptions} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <DropDownMenu brands={brands} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            <DropDownMenu priceRanges={priceRanges} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        </div>
    )
}
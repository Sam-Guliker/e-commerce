import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu'

export default function Sort() {
    const [selected, setSelected] = useState("What's new?")
    const options = ['Populair', 'Start from lowest price', 'Start from highest price']

    return (
        <div className="sort-container">
            <h2 className="heading-03">Sort</h2>
            <DropDownMenu options={options} selected={selected} setSelected={setSelected} />
        </div>
    )
}
// https://codepen.io/foxdonut/pen/GpwRJB?editors=001
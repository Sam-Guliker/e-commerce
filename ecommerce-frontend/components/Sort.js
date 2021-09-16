import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu'

export default function Sort() {
    const [selected, setSelected] = useState("What's new?")

    return (
        <div className="sort-container">
            <h2 className="heading-02">Sort</h2>
            <DropDownMenu selected={selected} setSelected={setSelected} />
        </div>
    )
}
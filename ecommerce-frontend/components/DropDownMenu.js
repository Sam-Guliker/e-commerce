import React, { useState } from 'react';
import Image from 'next/image'

export default function DropDownMenu({selected, setSelected}) {
    const [isActive,setIsActive] = useState(false)
    const options = ['Populair', 'Start from lowest price', 'Start from highest price']

    return (
        <div className="dropdown-container">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>{selected} <Image src="/icons/chevron.png" width="15" height="15"/></div>
                {isActive && (
                    <div className="dropdown-content">
                            {options.map((option) => {                        
                                    return (
                                        <div onClick={(e) => { 
                                                setSelected(option)
                                                setIsActive(false);
                                            }} key={option.length} className="dropdown-item">
                                            {option}
                                        </div>
                                    )
                            })}
                    </div>
                )}
        </div>
    )
}
import {gsap, Power2 } from "gsap";
import { useRef, useEffect } from 'react';

export default function NavigationOverlay({isActiveNavigation,setIsActiveNavigation}) {
    let navRef = useRef(null)
    const tl = gsap.timeline({defaults: {autoAlpha: 0}})    
    const overlayContainer = isActiveNavigation ? `navigation-overlay js-open-overlay` : `navigation-overlay`;

    useEffect(() => {
        tl.set(navRef.current, { display: 'flex', duration:0, autoAlpha: 0})
    }, [])

    isActiveNavigation ? tl.to(navRef.current, {autoAlpha: 1}): tl.to(navRef.current, {autoAlpha: 0})

    return (
        <nav ref={navRef} className={overlayContainer}>
            <div className="nav-container">
                <a>Nike</a>
                <a>Adidas</a>
                <a>Reebok</a>
                <a>Balenciaga</a>
            </div>
        </nav>
    )
}
import {gsap} from "gsap";
import { useRef, useEffect } from 'react';

export default function NavigationOverlay({isActiveNavigation}) {
    let navRef = useRef(null)
    const tl = gsap.timeline({defaults: {autoAlpha: 0}})    
    const overlayContainer = isActiveNavigation ? `navigation-overlay js-open-overlay` : `navigation-overlay`;

    useEffect(() => {
        tl.set(navRef.current, { display: 'flex', duration:0, autoAlpha: 0})
    }, [])

    const animateNavigation = () => {
        tl.to(navRef.current, {autoAlpha: 1})
    }

    const resetAnimation = () => {
        tl.to(navRef.current, {autoAlpha: 0})
    }

    isActiveNavigation ? animateNavigation() : resetAnimation()

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
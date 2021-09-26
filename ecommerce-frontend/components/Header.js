import { useContext } from 'react'
import {useRouter} from 'next/router'

import HMenu from "./HMenu";
import Bag from "./Bag";

import LogoIcon from "./LogoIcon";

import AuthContext from '../context/AuthContext'

export default function Header({isActiveNavigation, setIsActiveNavigation, cart}) {
    const { user } = useContext(AuthContext)

    return (
        <header className="header">
            <div className="container container--header">
                <div className="navigation-group">
                    <HMenu isActiveNavigation={isActiveNavigation} setIsActiveNavigation={setIsActiveNavigation}/>
                    <LogoIcon />
                </div>
                <Bag cart={cart} />
            </div>
        </header>
    )
}

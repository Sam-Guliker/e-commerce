import { useContext } from 'react'
import {useRouter} from 'next/router'

import Link from 'next/link'

import Icon from "./Icon";
import Nav from "./Nav";
// import UserActions from "./UserActions";

import AuthContext from '../context/AuthContext'

export default function Header() {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)

    return (
        <header className="header">
            <div className="container">
                {!isHome && <a href="#" onClick={goBack}>{"<"} Back</a>}
                <Icon />
                <Nav />
                {/* <UserActions /> */}

                <div className="auth">
                    { user ? (
                        <Link href="/account">
                            <a>
                                {user.email}
                            </a>
                        </Link>
                    ):(
                        <Link href="/login">
                            <a>Log in</a>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

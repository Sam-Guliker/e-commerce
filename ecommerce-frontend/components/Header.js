import Icon from "./Icon";
import Nav from "./Nav";
// import UserActions from "./UserActions";
import {useRouter} from 'next/router'

export default function Header() {

    const router = useRouter()
    const isHome = router.pathname === '/'

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <header className="header">
            {!isHome && <a href="#" onClick={goBack}>{"<"} Back</a>}
            <Icon />
            <Nav />
            {/* <UserActions /> */}
        </header>
    )
}

import { createContext} from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [user, setUser] = useState(null)
    const router = useRouter()
    
    /**
     * 
     * @param { string } email 
     */

    const loginUser = async (email) => {
        setUser({ email })
        router.push('/')
    }

    /**
     * Logs the user out (to null)
     */

    const logoutUser = async () => {
        setUser(null)
        router.push('/')
    }

    return(
        <AuthContext.Provider value={{ user, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
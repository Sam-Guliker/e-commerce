import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

export default function Login() {

    const [email, setEmail] = useState('')
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(email)
    }

    return (
        <section>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login here to make your purchase" />
            </Head>

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)}></input>
                <button type="submit"> Login </button>
            </form>
        </section>
    )
}
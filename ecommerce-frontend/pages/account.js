import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import Link from 'next/link'

export default function Account() {

    const { user, logoutUser } = useContext(AuthContext)

    if(!user) {
        return (
            <div>
                <p> Please login or register</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }

    return (
        <section>
            <Head>
                <title>Account page</title>
                <meta name="description" content="The account page, view your order" />
            </Head>

            <h2>Account page</h2>
            <a href="#" onClick={logoutUser}>Logout</a>
        </section>
    )
}
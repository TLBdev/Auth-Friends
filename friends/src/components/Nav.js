import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>

            <Link to='/friends'>Friends</Link>
            <Link to='/login'>Login</Link>

        </>
    )
}
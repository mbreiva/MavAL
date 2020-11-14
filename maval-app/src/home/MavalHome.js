import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../shared_components/NavBar'

export default function HomePage() {
    return (
        <div className="container" >
            <NavBar />
            <div style={{textAlign:"center"}}>
                <h1>Welcome to MavAL!</h1>
                <p>New user? Register <Link to="/register">here</Link>.</p>
                <p>Already have an account? Login <Link to="login">here</Link>.</p>
            </div>
        </div>
    )
}
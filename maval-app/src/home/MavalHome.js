import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="container">
            <h1>MavAL</h1>
            <p>Welcome to MavAL!</p>
            <p>New user? Register <Link to="/register">here</Link>.</p>
            <p>Already have an account? Login <Link to="login">here</Link>.</p>
        </div>
    )
}
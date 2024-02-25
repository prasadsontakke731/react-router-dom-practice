import React, { useState } from 'react'
import { useAuth } from '../utils/auth'

const Login = () => {
    const [user, setUser] = useState("")

    const auth = useAuth()
    const handleLogin = () => {
        auth.login(user)
    }
    return (
        <div>
            <h1>Login Component</h1>
            <label htmlFor="">Username: <input type="text" placeholder='enter name' onChange={(e) => setUser(e.target.value)} /></label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
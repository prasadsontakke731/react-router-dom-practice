import React from 'react'
import { useNavigate } from "react-router-dom"
const Contact = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Contact Component</h1>
            <button onClick={handleClick} className='mt-3 btn btn-warning'>Go Back Home</button>
        </div>
    )
}

export default Contact
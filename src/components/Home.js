import React from 'react'
import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("order-summary")
    }
    return (
        <div>
            <h1>Home Component</h1>
            <button className='mt-3 btn btn-success' onClick={handleClick}>Place Order</button>
        </div>
    )
}

export default Home
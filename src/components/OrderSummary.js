import React from 'react'
import { useNavigate } from "react-router-dom"
const OrderSummary = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    return (
        <div>
            <h1>Order Confirm</h1>
            <button className='mt-3 btn btn-outline-danger fw-bold' onClick={handleClick}>Back To Home </button>
        </div>
    )
}

export default OrderSummary
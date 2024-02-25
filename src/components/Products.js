import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <input type="text" placeholder='search product' />
            <nav>
                <Link to="/products/featured">Featured</Link>
                <Link to="/products/new">New</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Products
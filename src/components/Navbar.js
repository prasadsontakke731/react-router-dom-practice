import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid text-primary">
                    <NavLink className="text" to="/">  <span class="navbar-brand mb-0 h1 text-primary">Home</span></NavLink>
                    <NavLink className="text" to="/profile">  <span class="navbar-brand mb-0 h1 text-primary">Profile</span></NavLink>
                    <NavLink className="text" to="/users">  <span class="navbar-brand mb-0 h1 text-primary">Users</span></NavLink>
                    <NavLink className="text" to="/about">  <span class="navbar-brand mb-0 h1 text-primary">About</span></NavLink>
                    <NavLink className="text" to="/products">  <span class="navbar-brand mb-0 h1 text-primary">Products</span></NavLink>
                    <NavLink className="text" to="/contact">  <span class="navbar-brand mb-0 h1 text-primary">Contact</span></NavLink>
                    <NavLink className="text" to="/cart">  <span class="navbar-brand mb-0 h1 text-primary">Cart</span></NavLink>
                    <NavLink className="text" to="/login">  <span class="navbar-brand mb-0 h1 text-primary">Login</span></NavLink>
                    <NavLink className="text" to="/logout">  <span class="navbar-brand mb-0 h1 text-primary">Logout</span></NavLink>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
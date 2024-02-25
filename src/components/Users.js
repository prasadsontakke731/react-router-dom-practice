import React from 'react'
import { Outlet, useSearchParams } from "react-router-dom"
const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get("filter") === "active"
    return (
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <h1>User 4</h1>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: "active" })}>Active Users</button>
                <button onClick={() => setSearchParams()}>Reset Filter</button>
            </div>
            {
                showActiveUsers ? <h1>Showing active users</h1> : <h1>Showing all users</h1>
            }
        </div>
    )
}

export default Users
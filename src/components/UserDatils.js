import React from 'react'
import { useParams } from "react-router-dom"
const UserDatils = () => {
    const params = useParams()
    const id = params.id
    return (
        <div>
            <h1>Details About User : {id}</h1>
        </div>
    )
}

export default UserDatils
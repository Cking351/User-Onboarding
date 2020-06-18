import React from 'react'
import { Card, Toast } from 'reactstrap'

function User({ details }) {
    if (!details) {
        return <h3>Attempting to find your data..</h3>
    }
    return (
        <div>
            <Card className='card'>
            <h3>{details.first_name} {details.last_name}</h3>
            <h4>New User</h4>
            {/* <p> User Id: {details.id}</p> */}
            <p>Email: {details.email}</p>
            <br></br>
            </Card>
        </div>    
    )
}

export default User
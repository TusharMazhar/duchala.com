import React from 'react'
import { Link } from 'react-router-dom'
const ConfirmRegistration = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'green'}}>Your Registration Successfully Complete!!!</h1>
            <h3 style={{color:'red'}}>Thank you so much for joining with us!</h3>
            <h6 style={{color:'black',fontWeight:'bold'}}>We will get back to you very soon!</h6>
            <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',color:'white'}} to='/'>
                Go Back
            </Link>
        
        </div>
    )
}

export default ConfirmRegistration

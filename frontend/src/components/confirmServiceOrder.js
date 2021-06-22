import React from 'react'
import { Link } from 'react-router-dom'
const ConfirmServiceOrder = () => {
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'green'}}>Your service request  has been placed successfully!!!</h1>
            <h3 style={{color:'red'}}>Thank you so much for taking our service !</h3>
            <h6 style={{color:'black',fontWeight:'bold'}}>We will call you within 5 mins!</h6>
            <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',color:'white'}} to='/'>
                Go Back
            </Link>
        
        </div>
    )
}

export default ConfirmServiceOrder

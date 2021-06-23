import React from 'react'
import Background  from '../background.jpg'
const Image = () => {
    return (
        <div >
            <img src={Background}style={{width:'100%',height:'100px',objectFit:'cover'}} alt="slider" />
        </div>
    )
}

export default Image

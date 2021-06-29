import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ConfirmRegistration = () => {
    return (
        <Card style={{textAlign:'center'}}>
            <h1 style={{color:'#0B8A55'}}>আপনার মতামত আমরা পেয়েছি</h1>
            <h3 style={{color:'black'}}>আপানাদের সেবা প্রদান করাই আমাদের লক্ষ্য!!</h3>
            <h6 style={{color:'black',fontWeight:'bold'}}>আমরা আপনার সাথে অতিদ্রুত যোগাযোগ করব</h6>
            <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',color:'white'}} to='/'>
                হোম পেজ
            </Link>
        
        </Card>
    )
}

export default ConfirmRegistration

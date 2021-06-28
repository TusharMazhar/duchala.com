import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ConfirmRegistration = () => {
    return (
        <Card style={{textAlign:'center'}}>
            <h1 style={{color:'#0B8A55'}}>আপনার রেজিষ্টেশন  সফল হয়েছে</h1>
            <h3 style={{color:'black'}}>আমাদের সাথে কাজ করতে আগ্রহী হওয়ার জন্য আপনাকে ধন্যবাদ!!</h3>
            <h6 style={{color:'black',fontWeight:'bold'}}>আমরা আপনার সাথে অতিদ্রুত যোগাযোগ করব</h6>
            <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',color:'white'}} to='/'>
                হোম পেজ
            </Link>
        
        </Card>
    )
}

export default ConfirmRegistration

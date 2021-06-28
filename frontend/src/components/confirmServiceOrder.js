import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ConfirmServiceOrder = () => {
    return (
        <Card style={{textAlign:'center'}}>
            <h1 style={{color:'#0B8A55'}}>আপনার সার্ভিস গ্রহন করার রিকোয়েস্ট আমরা পেয়েছি</h1>
            <h3 style={{color:'black'}}>আপনাকে অনেক ধন্যবাদ আমাদের সার্ভিস নেওয়ার জন্য!!</h3>
            <h6 style={{color:'black',fontWeight:'bold'}}>আমরা আপনার সাথে ৫ মিনিটের মধ্যে যোগাযোগ করব</h6>
            <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',color:'white'}} to='/'>
                হোম পেজ
            </Link>
        
        </Card>
    )
}

export default ConfirmServiceOrder

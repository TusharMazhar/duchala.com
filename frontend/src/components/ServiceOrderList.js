import React,{useEffect}from 'react'
import { Row, Col} from 'react-bootstrap'
import {  useSelector } from 'react-redux'
const ServiceOrderList = ({history}) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
   
    useEffect(()=>{
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
    },[userInfo])
    return (
        <div style={{textAlign:'center'}}>
            service orderlist
        </div>
    )
}

export default ServiceOrderList

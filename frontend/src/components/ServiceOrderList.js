import Axios from 'axios'
import React,{useEffect,useState}from 'react'
import { Row, Col, Card ,Container} from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import axios from 'axios'

const ServiceRegisterList = ({history}) => {
    const [category,setCategory] = useState('all')
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const [serviceOrderList,setServiceOrderList] = useState([])

    const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

    useEffect(() => {
        const serviceOrder = async ()=>{
           const res = await axios.get('/api/service/order/adminduchala',config)
           const data = await res.data
           setServiceOrderList(data)  
          
        }
        serviceOrder()
     },[]);


  
    useEffect(()=>{
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
    },[userInfo])

    return (
        <> 
          <h1 style={{color:'#0B8A55',textAlign:'center',margin:'auto',fontSize:'20px',fontWeight:'bold'}}>আমাদের সর্বমোট সার্ভিস অর্ডার আছে ({serviceOrderList.length} টি)</h1>
        <div style={{marginTop:'5px',marginBottom:'15px',textAlign:'center'}}>

          <select
             type='category'
             onChange={(e) => setCategory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='technician'>Other Profession</option>
            <option value='doctor'>Doctor</option>
            <option value="electrician">Medicine shop</option>
            <option value='technician'>Cook</option>
            <option value='technician'>Car Driver</option>
            <option value='technician'>Ambulance Driver</option>
            <option value='technician'>Electrician</option>
            <option value='technician'>Designer</option>
            <option value='technician'>CNG Driver</option>
            <option value='technician'>Van Driver</option>
            <option value='technician'>Flat sell</option>
            <option value='technician'>Photographer</option>
            <option value='technician'>Plumber</option>
            <option value='technician'>Teacher</option>
            <option value='technician'>Repairer</option>
            <option value='technician'>Tiles Mechanic</option>
            <option value='technician'>Other shop</option>

          </select>
        </div>

          <Row style={{marginBottom:'20px'}}>
             
             {
                 serviceOrderList.length>0?(
                    <Row style={{marginBottom:'20px'}}>
                    {serviceOrderList.map((service) => (
                    <Col key={service._id} xs={12} sm={6} md={6} lg={4} xl={3} >
                        <Card style={{margin:'5px',marginLeft:'30px',border:'1px solid #0B8A55',color:'white'}}>
                            
                            <Card.Body>
                                <Card.Title className="text-center font-weight-bold text-light bg-dark">{service.name}</Card.Title>
                            </Card.Body>
                            <div className="ml-4 mr-2 ">
                                <Card.Text ><span style={{color:'black'}}>Mobile:</span><span className="text-success"> {service.phone}</span></Card.Text>
                                <Card.Text><span style={{color:'black'}}>Profession:</span><span className="text-success"> {service.category}</span></Card.Text>
                                <Card.Text><span style={{color:'black'}}>Address:</span><span className="text-success"> {service.location}</span></Card.Text>
                                <Card.Text><span style={{color:'black'}}>Description:</span><span className="text-success"> {service.description}</span></Card.Text>
                            </div>
                `
                            </Card>
                        </Col>
                        ))}
                    </Row>
                 ):(
                     <h6 style={{color:'red',textAlign:'center',margin:'auto'}}>কোন সার্ভিস অর্ডার নাই</h6>
                 )
             }
        
          </Row>
        </>
    )
}

export default ServiceRegisterList


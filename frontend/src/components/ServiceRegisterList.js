import React,{useEffect,useState}from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import axios from 'axios'

const ServiceRegisterList = ({history}) => {
    const [category,setCategory] = useState('all')
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const [serviceOrderList,setServiceOrderList] = useState([])

    

    useEffect(() => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
        const serviceOrder = async ()=>{
           const res = await axios.get('/api/service/registration/adminduchala',config)
           const data = await res.data
           setServiceOrderList(data)  
          
        }
        serviceOrder()
     },[userInfo]);


  
    useEffect(()=>{
        if (!userInfo || !userInfo.isAdmin) {
            history.push('/login')
        }
    },[userInfo,history])

    return (
        <> 
          <h1 style={{color:'#0B8A55',textAlign:'center',margin:'auto',fontSize:'20px',fontWeight:'bold'}}>আমাদের সর্বমোট রেজিস্ট্রারড কর্মী ({serviceOrderList.length} জন)</h1>
        <div style={{marginTop:'5px',marginBottom:'15px',textAlign:'center'}}>

          <select
             type='category'
             onChange={(e) => setCategory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='other_profession'>Other Profession</option>
            <option value='doctor'>Doctor</option>
            <option value="medicine_shop">Medicine shop</option>
            <option value='cook'>Cook</option>
            <option value='car_driver'>Car Driver</option>
            <option value='ambulance_driver'>Ambulance Driver</option>
            <option value='electrician'>Electrician</option>
            <option value='designer'>Designer</option>
            <option value='cng_driver'>CNG Driver</option>
            <option value='van_driver'>Van Driver</option>
            <option value='flat_sell'>Flat sell</option>
            <option value='photographer'>Photographer</option>
            <option value='technician'>technician</option>
            <option value='plumber'>Plumber</option>
            <option value='teacher'>Teacher</option>
            <option value='repairer'>Repairer</option>
            <option value='tiles_mechanic'>Tiles Mechanic</option>
            <option value='other_shop'>Other shop</option>

          </select>
        </div>

          <Row style={{marginBottom:'20px'}}>
             
             {
                 serviceOrderList.length>0?(
                    <Row style={{marginBottom:'20px'}}>
                    {serviceOrderList.map((service) => (
                    <Col key={service._id} xs={12} sm={6} md={6} lg={4} xl={3} style={{width:'300px'}}>
                        <Card style={{margin:'5px',marginLeft:'10px',border:'1px solid #0B8A55',color:'white'}}>
                            
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
                     <h6 style={{color:'red',textAlign:'center',margin:'auto'}}>কোন কর্মী রেজিস্ট্রেশন করে নাই</h6>
                 )
             }
        
          </Row>
        </>
    )
}

export default ServiceRegisterList


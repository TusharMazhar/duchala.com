import React,{useEffect,useState}from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import axios from 'axios'

const ServiceRegisterList = ({history}) => {
    const [category,setCategory] = useState('')
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const [serviceOrderList,setServiceOrderList] = useState([])
    const [serviceOrderList2,setServiceOrderList2] = useState([])


    useEffect(()=>{
       console.log(category)
       if(category==='all'){
        setServiceOrderList(serviceOrderList2)
       }else{
         const updatedArr = serviceOrderList2.filter(item=>{
           return item.category===category
         })
         setServiceOrderList(updatedArr)
       }

    },[category])

    useEffect(() => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
        const serviceOrder = async ()=>{
           const res = await axios.get('/api/service/order/adminduchala',config)
           const data = await res.data
           setServiceOrderList(data)  
           setServiceOrderList2(data)  
          
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
          <h1 style={{color:'#0B8A55',textAlign:'center',margin:'auto',fontSize:'20px',fontWeight:'bold'}}>আমাদের সর্বমোট সার্ভিস অর্ডার আছে ({serviceOrderList.length} টি)</h1>
        <div style={{marginTop:'5px',marginBottom:'15px',textAlign:'center'}}>

          <select
             type='category'
             onChange={(e) => setCategory(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='doctor'>Doctor</option>
            <option value="medicine">Medicine</option>
            {/* <option value='cook'>Cook</option> */}
            <option value='car'>Car</option>
            <option value='ambulance'>Ambulance</option>
            <option value='electrician'>Electrician</option>
            <option value='designer'>Designer</option>
            <option value='cng'>CNG</option>
            <option value='van'>Van</option>
            <option value='flat_rent'>Flat Rent</option>
            <option value='photographer'>Photographer</option>
            <option value='technician'>Technician</option>
            <option value='plumber'>Plumber</option>
            <option value='teacher'>Teacher</option>
            <option value='repairer'>Repairer</option>
            <option value='tiles_mechanic'>Tiles Mechanic</option>

          </select>
        </div>

          <Row style={{marginBottom:'20px'}}>
             
             {
                 serviceOrderList.length>0?(
                    <Row style={{marginBottom:'20px'}}>
                    {serviceOrderList.map((service) => (
                    <Col key={service._id} xs={12} sm={6} md={6} lg={6} xl={6} >
                        <Card style={{margin:'5px',marginLeft:'10px',border:'1px solid #0B8A55',color:'white'}}>
                            
                            <Card.Body>
                                <Card.Title className="text-center font-weight-bold text-light bg-dark">{service.name}</Card.Title>
                            </Card.Body>
                            <div className="ml-4 mr-2 ">
                                <Card.Text ><span style={{color:'black'}}>Mobile:</span><span className="text-success"> {service.phone}</span></Card.Text>
                                <Card.Text><span style={{color:'black'}}>Need:</span><span className="text-success"> {service.category}</span></Card.Text>
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


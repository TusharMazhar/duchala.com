import React, { useState} from 'react'
import axios from 'axios'
import { Form, Button, Card} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const BoostingService = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const category = 'Boosting'
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')
  
  const submitHandler = async (e) => {

      e.preventDefault()

      await axios.post('/api/service/order',{
          name: name,
          phone: phone,
          category: category,
          location: location,
          description: description
      }).then(()=> history.push('/service/order/confirm')).catch((err)=>console.log(err))

  }

  return (
    <Card.Body>
      <Card.Text style={{margin:'auto',backgroundColor:'#0B8A55',color:'white',textAlign:'center',padding:'20px'}}>
        <span>আপনি যদি আপনার ফেসবুক পেজ,ইউটিউন চ্যানেল পরিচিতি বাড়ানোর জন্য বোস্টিং করতে চান, তাহলে আমাদের নিচের ফর্মটি পূরণ করে সাবমিট করুন</span>
        
      </Card.Text>
    <FormContainer>
      <h1 style={{color:'#0B8A55',textAlign:'center'}}>বোস্টিং সার্ভিস</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>নাম</Form.Label>
          <Form.Control
            type='name'
            placeholder='আপনার নাম লিখুন'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>নাম্বার</Form.Label>
          <Form.Control
            type='number'
            placeholder='আপনার নাম্বার লিখুন'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='location'>
          <Form.Label>ঠিকানা</Form.Label>
          <Form.Control
            type='location'
            placeholder='আপনার ঠিকানা লিখুন'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label style={{display:'block'}}>কাজের বর্ণনা</Form.Label>
          <textarea
            style={{width:'300px',height:'100px',paddingLeft:'20px',paddingTop:'10px'}}
            type='description'
            placeholder='আপনি কি কাজ করাতে চান বিস্তারিত লিখুন'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Form.Group>

        <Button style={{backgroundColor:'#0B8A55',marginBottom:'20px'}} type='submit' variant='primary' disabled={(name==='') || (phone==='') || (location==='') || (description==='') || (category==='')}>
           সাবমিট করুন
        </Button>
      </Form>
    </FormContainer>
    </Card.Body>
  )
}

export default BoostingService 

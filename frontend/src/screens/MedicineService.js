import React, { useState} from 'react'
import axios from 'axios'
import { Form, Button,Card} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const MedicineService = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const category = 'medicine'
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
        <span>আপনার দরকারি মেডিসিন গুলো এবং কি পরিমাণ লাগবে তা নিচের ফর্ম পূরণ করে সাবমিট করুন</span>
        
      </Card.Text>
    <FormContainer>
      <h1 style={{color:'#0B8A55',textAlign:'center'}}>মেডিসিন সার্ভিস</h1>
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
          <Form.Label>মোবাইল নাম্বার</Form.Label>
          <Form.Control
            type='number'
            placeholder='আপনার মোবাইল নাম্বার লিখুন'
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
          <Form.Label style={{display:'block'}}>মেডিসিন লিস্ট</Form.Label>
          <textarea
            style={{width:'300px',height:'100px',paddingLeft:'20px',paddingTop:'10px'}}
            type='description'
            placeholder='আপনার দরকারি মেডিসিন গুলোর নাম লিখুন'
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

export default MedicineService 

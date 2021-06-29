import React, { useState} from 'react'
import axios from 'axios'
import { Form, Button,Card} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const ServiceRegisterScreen = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')

  const submitHandler = async (e) => {

      e.preventDefault()

      await axios.post('/api/service/registration',{
          name: name,
          phone: phone,
          category: 'request',
          location: location,
          description: description
      }).then(()=> history.push('/user/request/confirm')).catch((err)=>console.log(err))

  }

  return (
    <Card.Body >
    <Card.Text style={{margin:'auto',backgroundColor:'#0B8A55',color:'white',textAlign:'center',padding:'20px'}}>
        <span>আপনার জন্য কোন পণ্য এনে দেওয়া লাগবে বা আমাদের প্রতি আপনি কোন পরামর্শ দিতে চান আথবা আমাদের সার্ভিস নিয়ে ভাল/খারাপ কোন মতামত দিতে চান। তাহলে নিচের ফর্মটি পূরণ করে সাবমিট করুন</span>
      </Card.Text>
    <FormContainer width="522px">
      <h1 style={{color:'#0B8A55',textAlign:'center'}}>রিকোয়েষ্ট/মতামত দিন</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>আপনার নাম</Form.Label>
          <Form.Control
            type='name'
            placeholder='আপনার নামটি লিখুন'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>মোবাইল নাম্বার</Form.Label>
          <Form.Control
            type='number'
            placeholder='মোবাইল নাম্বারটি লিখুন'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='location'>
          <Form.Label>আপনার ঠিকানা </Form.Label>
          <Form.Control
            type='location'
            placeholder='আপনার ঠিকানাটি লিখুন'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label style={{display:'block'}}>মতামত অপশন</Form.Label>
          <textarea
            style={{width:'300px',height:'100px',paddingLeft:'20px',paddingTop:'10px'}}
            type='description'
            placeholder='আপনি আমাদের কাছে কোন প্রোডাক্ট এনে দেওয়ার রিকোয়েষ্ট করতে চান নাকি আমাদের জন্য কোন পরামর্শ দিতে চান? লিখুন এখানে...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Form.Group >

        <Button type='submit' variant='primary' disabled={(name==='') || (phone==='') || (location==='') || (description==='')} style={{backgroundColor:'#0B8A55',marginBottom:'20px'}}>
            সাবমিট করুন
        </Button>
      </Form>
    </FormContainer>
    </Card.Body>
  )
}

export default ServiceRegisterScreen

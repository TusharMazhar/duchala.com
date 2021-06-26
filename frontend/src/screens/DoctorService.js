import React, { useState} from 'react'
import axios from 'axios'
import { Form, Button,Card} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const DoctorService = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const category = 'Doctor'
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
        <span>আপনি যদি আপনার সমস্যাগুলোর জন্য ডাক্তার দেখাতে চান,নিচের ফর্মটি পূরণ করে সাবমিট করুন।</span>
        <span> আপনাকে অগ্রিম ধন্যবাদ জানাচ্ছি আমাদের সেবা গ্রহণ করার জন্য।</span>
        <span> ডাক্তার ফী-৬০ টাকা। বিকাশ নাম্বারঃ 0178-7373498। বিকাশ করে ফর্মটি সাবমিট করুন। আমরা ৫ মিনিটের মধ্যে আপনার সাথে যোগাযোগ করব।</span>
      </Card.Text>
    <FormContainer>
      <h1 style={{color:'#0B8A55',textAlign:'center'}}>ডাক্তার সার্ভিস</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>নাম</Form.Label>
          <Form.Control
            type='name'
            placeholder='রোগীর নাম লিখুন'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>নাম্বার</Form.Label>
          <Form.Control
            type='number'
            placeholder='রোগীর নাম্বার লিখুন'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='location'>
          <Form.Label>বিকাশ নাম্বার</Form.Label>
          <Form.Control
            type='location'
            placeholder='যে নাম্বার থেকে টাকা পে করেছেন, সেই নাম্বারটি লিখুন'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label style={{display:'block'}}>রোগীর বর্ণনা</Form.Label>
          <textarea
            style={{width:'300px',height:'100px',paddingLeft:'20px',paddingTop:'10px'}}
            type='description'
            placeholder='আপনার বয়স এবং কি সমস্যা ছোট করে লিখুন'
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

export default DoctorService

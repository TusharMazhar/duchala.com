import React, { useState} from 'react'
import axios from 'axios'
import { Form, Button,Card} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const ServiceRegisterScreen = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [category,setCategory] = useState('')
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')

  const submitHandler = async (e) => {

      e.preventDefault()

      await axios.post('/api/service/registration',{
          name: name,
          phone: phone,
          category: category,
          location: location,
          description: description
      }).then(()=> history.push('/workers/registration/confirm')).catch((err)=>console.log(err))

  }

  return (
    <Card.Body >
    <Card.Text style={{margin:'auto',backgroundColor:'#0B8A55',color:'white',textAlign:'center',padding:'20px'}}>
        <span>আপনার কাজের দক্ষতা অনুযায়ী রেজিষ্টেশন করুন। আপনি একাধিকবার কাজের দক্ষতা অনুযায়ী রেজিষ্টেশন করতে পারবেন।</span>
        <span> আপনাকে অগ্রিম ধন্যবাদ জানাচ্ছি আমাদের সাথে যুক্ত হওয়ার জন্য।</span>
      </Card.Text>
    <FormContainer width="522px">
      <h1 style={{color:'#0B8A55',textAlign:'center'}}>কর্মী রেজিষ্টেশন ফর্ম</h1>
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

        <Form.Label style={{color:'red'}}>আপনি কোন কাজে দক্ষ?</Form.Label>
        <div style={{marginTop:'5px',marginBottom:'10px'}}>

          <select
             type='category'
             onChange={(e) => setCategory(e.target.value)}
          >
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
          <Form.Label style={{display:'block'}}>আপনার কাজের বর্ণনা</Form.Label>
          <textarea
            style={{width:'300px',height:'100px',paddingLeft:'20px',paddingTop:'10px'}}
            type='description'
            placeholder='ছোট করে আপনার কাজের বর্ণনা/অভিজ্ঞতা লিখুন'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Form.Group >

        <Button type='submit' variant='primary' disabled={(name==='') || (phone==='') || (location==='') || (description==='') || (category==='')} style={{backgroundColor:'#0B8A55',marginBottom:'20px'}}>
          রেজিষ্টেশন করুন
        </Button>
      </Form>
    </FormContainer>
    </Card.Body>
  )
}

export default ServiceRegisterScreen

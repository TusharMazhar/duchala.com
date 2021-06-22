import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useHistory } from "react-router-dom";

const MedicineService = () => {
    let history = useHistory()
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const category = 'Medicine'
    const [location,setLocation] = useState('')
    const [description,setDescription] = useState('')
  
  useEffect(() => {
    console.log('category',category)
   
  }, [category])

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
    <FormContainer>
      <h1>Medicine Service</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='number'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='location'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='location'
            placeholder='Enter your Address'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Provide Medicine Names</Form.Label>
          <Form.Control
            type='description'
            placeholder='Provide Medicine Names'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={(name==='') || (phone==='') || (location==='') || (description==='') || (category==='')}>
           Order
        </Button>
      </Form>
    </FormContainer>
  )
}

export default MedicineService 

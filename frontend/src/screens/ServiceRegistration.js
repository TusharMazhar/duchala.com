import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button} from 'react-bootstrap'
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
        location: location,
        description: description
    }).then(()=> history.push('service/workers/registration/confirm')).catch((err)=>console.log(err))

}

  return (
    <FormContainer>
      <h1>Workers Registration</h1>
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
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='description'
            placeholder='Enter Your Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' disabled={(name==='') || (phone==='') || (location==='') || (description==='')}>
          Register
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ServiceRegisterScreen

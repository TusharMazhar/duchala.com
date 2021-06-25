import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { Link } from 'react-router-dom'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>আপনার পণ্যগুলো কোথায় পাঠাব?</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>ঠিকানা</Form.Label>
          <Form.Control
            type='text'
            placeholder='আপানার ঠিকানা লিখুন'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>আপনি কোন শহরে থাকেন?</Form.Label>
          <Form.Control
            type='text'
            placeholder='শহরের নাম লিখুন'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code [optional]</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group> */}

        {/* <Form.Group controlId='country'>
          <Form.Label>Country [optional]</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group> */}


        <Button type='submit' style={{backgroundColor:'#0B8A55'}} >
           পরের পেযে যান
        </Button>
        <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',marginLeft:'6px',color:'white'}} to='/'>
          হোম পেজ
      </Link>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen

import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { Link } from 'react-router-dom'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  // const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery')
  const paymentMethod = 'Cash On Delivery'
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>আপনি কিভাবে পেমেন্ট করবেন?</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>পেমেন্ট অপশন সিলেক্ট করুন</Form.Label>
          <Col>
            <Form.Check
              readOnly
              type='radio'
              label='ক্যাশ অন ডেলিভারি'
              checked
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' style={{backgroundColor:'#0B8A55',color:'white'}}>
          পরের পেজে যান
        </Button>
        <Link className='btn btn-light my-3' style={{backgroundColor:'#0B8A55',marginLeft:'6px',color:'white'}} to='/'>
         হোম পেজ
      </Link>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen

import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card,Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import { get } from 'mongoose'
import axios from 'axios'

const PlaceOrderScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log('user',userInfo._id )
  const dispatch = useDispatch()
  const [userReferId,setUserRefer] = useState('')

  const [validReferId,setResult] = useState(true)
  const cart = useSelector((state) => state.cart)

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = 0.00
  cart.taxPrice = 0.00
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate


  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeUserOrder = async ()=>{
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  const placeOrderHandler = async () => {
    if(userReferId!==''){
      
      const referIdUserId = (userReferId+'USAIRELAND'+userInfo._id)
      console.log(referIdUserId)
      await axios.get(`/api/user/referId/${referIdUserId}`).then((res)=>{
         if(res.data.active){
          placeUserOrder()
         }else{
            setResult(false)
         }
  
      
      })

    }else{
      placeUserOrder()
    }
    
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>পণ্যগুলো নিচের ঠিকানায় যাবে</h2>
              <p>
                <strong>ঠিকানা:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>আপনি পেমেন্ট অপশন সিলেক্ট করেছেন</h2>
              <strong>অপশন: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>নিচের পণ্যগুলো অর্ডার করেছেন</h2>
              {cart.cartItems.length === 0 ? (
                <Message>আপনার ব্যাগে কোন পণ্য নাই</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ({item.price}) = {item.qty * item.price} টাকা
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>অর্ডার সামারি</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>পণ্যগুলোর প্রাইস</Col>
                  <Col>{cart.itemsPrice} টাকা</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>ডেলিভারি ফী</Col>
                  <Col>{cart.shippingPrice} টাকা</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Row>
                  <Col> ট্যাক্স</Col>
                  <Col>{cart.taxPrice} টাকা</Col>
                </Row>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Row>
                  <Col style={{color:'red'}}>সর্বমোট</Col>
                  <Col style={{color:'red'}}>{cart.totalPrice} টাকা</Col>
                </Row>
              </ListGroup.Item>
              <Form.Group controlId='userReferId' style={{marginTop:'5px'}}>
                <Form.Control
                  style={{backgroundColor:'black',color:'white'}}
                  type='userReferId'
                  placeholder='যদি রেফার আইডি থাকে লিখুন'
                  value={userReferId}
                  onChange={(e) => setUserRefer(e.target.value)}
                ></Form.Control>
             </Form.Group>
              {
                validReferId?'':(
                  <p style={{color:'red',margin:'auto'}}>আপনার সংগ্রহ করা রেফার আইডি সঠিক নয়!!</p>
                )
              }
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  style={{backgroundColor:'#0B8A55'}}
                  type='button'
                  className='btn-block'
                  disabled={cart.totalPrice<500}
                  onClick={placeOrderHandler}
                >
                  অর্ডার করুন
                </Button>
              </ListGroup.Item>
              <ListGroup.Item style={{textAlign:'center'}}>
              <Link className='btn btn-light' style={{backgroundColor:'#0B8A55',marginLeft:'6px',color:'white'}} to='/'>
                  হোম পেজ
                </Link>
              </ListGroup.Item>
              
              {cart.totalPrice<500?(
                <p style={{color:'red',margin:'5px',textAlign:'center',fontWeight:'bold',fontSize:'20px'}}>Minimum order 500 Taka</p>
              ):''}
              
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  // const [referBonus, setBonus] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      const referActive = true
      const admin = true
      const referId = name.substr(0,5) + Math.floor(Math.random() * 10000000)
      if(email.toString()==='01787373498' || email.toString()==='01746730986' ){
        dispatch(register(name, email, password,admin,referId,referActive))
      }else{
        
        dispatch(register(name, email,password,!admin,referId,!referActive))
      }
      
    }
  }

  return (
    <FormContainer >
      <h1 style={{color:'#0B8A55'}}>রেজিষ্টেশন করুন</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
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

        <Form.Group controlId='email'>
          <Form.Label>মোবাইল নাম্বার</Form.Label>
          <Form.Control
            type='number'
            placeholder='মোবাইল নাম্বারটি লিখুন'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>পাসওয়ার্ড</Form.Label>
          <Form.Control
            type='password'
            placeholder='পাসওয়ার্ডটি লিখুন'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>পাসওয়ার্ড কনফার্ম</Form.Label>
          <Form.Control
            type='password'
            placeholder='পাসওয়ার্ডটি লিখুন'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' style={{backgroundColor:'#0B8A55'}}>
            রেজিষ্টেশন করুন
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          আপনার কি একাউন্ট আছে?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} style={{fontWeight:'bold'}}>
            লগিন করুন
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen

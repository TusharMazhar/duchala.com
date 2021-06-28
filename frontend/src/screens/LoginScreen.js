import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 style={{color:'#0B8A55'}}>লগ ইন করুন</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        <Button type='submit' variant='primary' style={{backgroundColor:'#0B8A55'}}>
           লগ ইন করুন
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          আপনি কি নতুন ব্যবহারকারি?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} style={{fontWeight:'bold'}}>
            রেজিষ্টেশন করুন
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen

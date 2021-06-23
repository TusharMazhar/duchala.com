import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline >
      <Form.Control
        style={{width:'500px'}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products Here...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' style={{backgroundColor:'#0B8A55'}}  className='p-2'>
        <i className="fas fa-search" style={{padding:'2px'}}></i>
      </Button>
    </Form>
  )
}

export default SearchBox

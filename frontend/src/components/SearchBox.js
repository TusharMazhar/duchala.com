import React, { useState,useEffect } from 'react'
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

  
 
  useEffect(()=>{
    const typeSearch = () => {
      if (keyword.trim()) {
        history.push(`/search/${keyword}`)
      } 
    }
    typeSearch()
  },[keyword,history])


  return (
    <Form onSubmit={submitHandler} inline >
      <Form.Control
        style={{width:'200px',border:'1px solid #0B8A55'}}
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='পণ্য সার্চ করুন...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' style={{backgroundColor:'#0B8A55',height:'45px'}}  className='p-2'>
        <i className="fas fa-search" style={{padding:'2px'}}></i>
      </Button>
    </Form>
  )
}

export default SearchBox

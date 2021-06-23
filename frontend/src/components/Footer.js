import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Row style={{padding:'20px',backgroundColor:'#0B8A55',color:'white',textAlign:'center'}}>
         <Col xs={2} sm={2} md={2} lg={2} xl={2}>

         </Col>
         <Col xs={8} sm={8} md={8} lg={8} xl={8}>
             Copyright &copy; duchala.com
         </Col>
         <Col xs={2} sm={2} md={2} lg={2} xl={2}>
         
         </Col>
      </Row>
    </>
  )
}

export default Footer

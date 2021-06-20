import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{backgroundColor:'#0B8A55',color:'white'}}  variant='dark' fixed="bottom">
      <Container>
        <Row>
          <Col className='text-center py-3' >Copyright &copy; duchala.com</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

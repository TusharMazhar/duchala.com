import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav,Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'
import Logo from '../logo.png'
import { Route } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header style={{marginBottom:'165px'}}>
      <Navbar fixed='top' style={{backgroundColor:'white'}}  variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand ><img src={Logo}  width="130px" alt="compay logo" /></Navbar.Brand>
          </LinkContainer>
              <Route render={({ history }) => <SearchBox style={{textAlign:'center'}} history={history} />} />
          <Navbar.Toggle aria-controls='basic-navbar-nav' style={{backgroundColor:'#0B8A55'}} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>   
              <LinkContainer to='/cart'>
                <Nav.Link >
                  <i style={{color:'#0B8A55'}} className='fas fa-shopping-cart'></i><span style={{color:'#0B8A55',fontSize:'15px'}}>পণ্যসমূহ</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-about'></i><span style={{color:'#0B8A55',fontSize:'15px'}}>আমাদের সম্পর্কে</span>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown style={{backgroundColor:'#0B8A55'}} title={userInfo.name} id='username' >
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link >
                    <i className='fas fa-user' ></i><span style={{color:'#0B8A55',fontSize:'15px'}}>লগ ইন করুন</span>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' style={{backgroundColor:'#0B8A55'}}>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/service-order-list'>
                    <NavDropdown.Item>Service Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/service-register-list'>
                    <NavDropdown.Item>Service Registers</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
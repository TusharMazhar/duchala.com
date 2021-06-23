import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import Logo from '../logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header style={{marginBottom:'105px'}}>
      <Navbar fixed='top' style={{backgroundColor:'white'}}  variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand ><img src={Logo}  width="130px" /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' style={{backgroundColor:'#0B8A55'}} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route  render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>   
              <LinkContainer to='/cart'>
                <Nav.Link >
                  <i style={{color:'#0B8A55'}} className='fas fa-shopping-cart'></i><span style={{color:'#0B8A55',fontSize:'15px'}}>Cart</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-about'></i><span style={{color:'#0B8A55',fontSize:'15px'}}>About</span>
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
                    <i className='fas fa-user' ></i><span style={{color:'#0B8A55',fontSize:'15px'}}>Sign In</span>
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

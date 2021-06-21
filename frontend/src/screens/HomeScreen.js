import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card,Button} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = ({ match,history }) => {
  const [category, setCategory] = useState('grocery')
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  useEffect(() => {
    history.push(`/search/${category}`)
  }, [category])

  const handleCategory=(name)=>{
    setCategory(name)
  }

  return (
    <> 
      <div style={{textAlign:'center'}}>
        <h5 style={{color:'#0B8A55',fontWeight:'bold'}}>Our Services</h5>
      </div>
      <div style={{marginBottom:'20px',marginLeft:'14px',paddingRight:'0px',paddingLeft:'0px'}}>
      <Row>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/doctor`}>
            <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://tse4.mm.bing.net/th?id=OIP.gSaeh0JDdD1Gze_qGGPbggHaId&pid=Api&P=0&w=300&h=300" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Doctor</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/medicine`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://static.vecteezy.com/system/resources/previews/000/637/912/original/medicine-icon-symbol-sign-vector.jpg" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Medicine</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/car`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://superawesomevectors.com/wp-content/uploads/2015/11/black-simple-car-icon.jpg" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Car</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/ambulance`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://static.vecteezy.com/system/resources/previews/000/421/996/original/vector-ambulance-icon.jpg" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Ambulance</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/electrician`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://cdn2.iconfinder.com/data/icons/professionals-flat-colorful/614/1584_-_Electrician-512.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Electrician</Card.Title>
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/designer`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://www.latsonprint.com/wp-content/uploads/2014/07/logo-design.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Designer</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/cng`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://cdn.dribbble.com/users/695124/screenshots/3754806/20.png?compress=1&resize=400x300" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>CNG</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/technician`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://w7.pngwing.com/pngs/569/608/png-transparent-computer-icons-technician-technical-support-web-text-computer-area.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Technician</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/van`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RthEElvw7il0HyNbLkRH1kZrUKYm-Z9RUg&usqp=CAU" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Van</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/flat`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd18WunavsmUYZgmuDnDbPgKGyEfD2gDZsXg&usqp=CAU" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Flat Rent</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/photographer`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://www.pngitem.com/pimgs/m/44-444474_photography-kid-photographer-clipart-2-image-cartoon-character.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Photographer</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/boosting`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://www.pngitem.com/pimgs/m/530-5308558_rocket-performance-booster-hd-png-download.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Boosting</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/plumber`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://www.clipartkey.com/mpngs/m/73-737810_banner-royalty-free-stock-ghiza-plumbing-plumber-icon.png" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Plumber</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/teacher`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://png.pngtree.com/element_our/png_detail/20181208/teaching-icon-png_265271.jpg" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Teacher</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/repairer`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvy07ayE_A7GhtcLOqTNg7ieiJYkD-fk8cNrZ7UlqTMba48Mifn-JcTNEDkqEtOkieWjw&usqp=CAU" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Repairer</Card.Title>
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/repairer`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCU99HOlUVLTsOpuZ4mFDi0_9d8aUzkm-lAA&usqp=CAU" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Tiles Mechanic</Card.Title>
            </Card>
             
          </Link>
        </Col>
      </Row>
        <div style={{textAlign:'center'}}>
          <Link to={`/service/registration`} style={{textAlign:'center'}}><Button style={{backgroundColor:'#0B8A55',color:'white'}}>Workers Registration Form</Button>  </Link>
        </div>
      </div>

  
      <div style={{textAlign:'center',marginBottom:'10px'}}>
        <Row>
          <Col style={{padding:'10px',backgroundColor:'#0B8A55',color:'white',cursor:'pointer',fontWeight:'bold'}} onClick={()=>handleCategory('Punjabi')}>Punjabi</Col>
          <Col style={{padding:'10px',backgroundColor:'red',color:'white',cursor:'pointer',fontWeight:'bold'}} onClick={()=>handleCategory('Grocery')}>Grocery</Col>
          <Col style={{padding:'10px',backgroundColor:'#0B8A55',color:'white',cursor:'pointer',fontWeight:'bold'}} onClick={()=>handleCategory('Boutique')}>Boutique</Col>
        </Row>
      
      </div>
      
      <Meta /> 
      

      <div style={{textAlign:'center'}}>
        <h5 style={{color:'#0B8A55',fontWeight:'bold'}}>
            {category} Products
        </h5>
      </div>
      
 
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen

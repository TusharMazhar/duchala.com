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

const HomeScreen = ({ match }) => {
  const [category, setCategory] = useState('punjabi')
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  useEffect(() => {
    console.log(category)
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
        {/* <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/Cinematographer`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfIa3MNnqcMUqs_icaAvXcM51pOFsIXFq7BA&usqp=CAU" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Cinemato</Card.Title>
            </Card>
             
          </Link>
        </Col> */}
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

        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/registration`}>
          <Card style={{ width: '130px' }}>
              <Card.Img variant="top" width={10} height={100} src="data:image/png;base64,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" />
              <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Registration</Card.Title>
            </Card>
             
          </Link>
        </Col>
 
      </Row>
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
              product.category===category?
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>:''
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

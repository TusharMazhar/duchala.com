import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card,Button} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import "./Box.css"
// import Image  from '../components/Image'

const HomeScreen = ({ match,history }) => {
  const [category, setCategory] = useState('')
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  useEffect(() => {
    if(category!==''){
      history.push(`/search/${category}`)
    }
  }, [category])

  const handleCategory=(name)=>{
    setCategory(name)
  }

  return (
    <div style={{marginBottom:'30px'}}> 
      <div style={{textAlign:'center'}}>
        <h5 style={{color:'#0B8A55',fontWeight:'bold'}}>Our Services</h5>
      </div>
      <div style={{marginBottom:'20px',marginLeft:'14px',paddingRight:'0px',paddingLeft:'0px'}}>
      <Row>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/doctor/order`}>
            <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://tse4.mm.bing.net/th?id=OIP.gSaeh0JDdD1Gze_qGGPbggHaId&pid=Api&P=0&w=300&h=300" />
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/medicine/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://static.vecteezy.com/system/resources/previews/000/637/912/original/medicine-icon-symbol-sign-vector.jpg" />
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/car/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://superawesomevectors.com/wp-content/uploads/2015/11/black-simple-car-icon.jpg" />
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/ambulance/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://static.vecteezy.com/system/resources/previews/000/421/996/original/vector-ambulance-icon.jpg" /> 
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/electrician/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://cdn2.iconfinder.com/data/icons/professionals-flat-colorful/614/1584_-_Electrician-512.png" />
            </Card>
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/designer/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://www.latsonprint.com/wp-content/uploads/2014/07/logo-design.png" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/cng/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://cdn.dribbble.com/users/695124/screenshots/3754806/20.png?compress=1&resize=400x300" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/technician/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://w7.pngwing.com/pngs/569/608/png-transparent-computer-icons-technician-technical-support-web-text-computer-area.png" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/van/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RthEElvw7il0HyNbLkRH1kZrUKYm-Z9RUg&usqp=CAU" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/flat/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd18WunavsmUYZgmuDnDbPgKGyEfD2gDZsXg&usqp=CAU" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/photographer/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://www.pngitem.com/pimgs/m/44-444474_photography-kid-photographer-clipart-2-image-cartoon-character.png" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/boosting/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://www.pngitem.com/pimgs/m/530-5308558_rocket-performance-booster-hd-png-download.png" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/plumber/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://www.clipartkey.com/mpngs/m/73-737810_banner-royalty-free-stock-ghiza-plumbing-plumber-icon.png" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/teacher/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://png.pngtree.com/element_our/png_detail/20181208/teaching-icon-png_265271.jpg" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/repairer/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvy07ayE_A7GhtcLOqTNg7ieiJYkD-fk8cNrZ7UlqTMba48Mifn-JcTNEDkqEtOkieWjw&usqp=CAU" />
            </Card>
             
          </Link>
        </Col>
        <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Link to={`/service/tiles/order`}>
          <Card className="service">
              <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCU99HOlUVLTsOpuZ4mFDi0_9d8aUzkm-lAA&usqp=CAU" />
              {/* <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Tiles Mechanic</Card.Title> */}
            </Card>
             
          </Link>
        </Col>
      </Row>
        <div style={{textAlign:'center'}}>
          <Link to={`/workers/registration`} style={{textAlign:'center'}} ><Button className="workers" >Workers Registration Form</Button>  </Link>
        </div>
      </div>

  
      <div style={{textAlign:'center',marginBottom:'10px',cursor:'pointer'}}>
        <Row>
          <Col className="category" onClick={()=>handleCategory('Sobji')}>Sobji</Col>
          <Col className="category" onClick={()=>handleCategory('Grocery')}>Grocery</Col>
          <Col className="category" onClick={()=>handleCategory('Mach')}>Mach</Col>
          <Col className="category" onClick={()=>handleCategory('Mach')}>Mangso</Col>
        </Row>
      
      </div>
      
      <Meta /> 
      

      {/* <div style={{textAlign:'center'}}>
        <h5 style={{color:'#0B8A55',fontWeight:'bold'}}>
            {category} Products
        </h5>
      </div> */}
      
 
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              
              <Col key={product._id} xs={12} sm={6} md={6} lg={4} xl={3}>
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
    </div>
  )
}

export default HomeScreen

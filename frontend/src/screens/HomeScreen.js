import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card,Button} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import InnerBgImg from "../background.jpg"
// import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import "./Box.css"


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
      <div style={{backgroundImage: "url(" + InnerBgImg +")",width:"auto"}}>
        <div style={{textAlign:'center'}}>
          <h5 style={{color:'white',fontWeight:'bold',paddingTop:'30px'}}>Our Services</h5>
        </div>
        <div style={{marginBottom:'20px',marginLeft:'14px',paddingRight:'0px',paddingLeft:'0px'}}>
          <Row style={{paddingRight:'15px',paddingLeft:'4px'}}>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/doctor/order`}>
                <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://img.pngio.com/dribbble-doc-iconpng-by-rsmehra-doctor-icon-png-1600_1200.png" />
                </Card>
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/medicine/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="data:image/jpeg;base64,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" />
                </Card>
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/car/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://image.flaticon.com/icons/png/512/190/190161.png" />
                </Card>
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/ambulance/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-ambulance-icon-png-image_3991709.jpg" /> 
                </Card>
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/electrician/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/electrician-10-841696.png" />
                </Card>
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/designer/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://www.pravakarkhanal.com.np/wp-content/uploads/2018/07/graphic-design-icon.png" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/cng/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://www.seekpng.com/png/small/520-5208929_auto-rickshaw-logo.png" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/technician/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="data:image/jpeg;base64,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" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/van/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLk6mx4nRnsuyHWfBpd6ps0iX0bgpf2s-xU9EfbTs0GEUdXApckw9qOEa7FxXm8ynM0ms&usqp=CAU" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/flat/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://image.flaticon.com/icons/png/512/700/700318.png" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/photographer/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurvoRhQ51CxbUe2pcztO1W4ok1XrfRxwGULZ1GIQstrFrsMfzPwdnI_xkaSI2nirUekY&usqp=CAU" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/boosting/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="data:image/png;base64,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" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/plumber/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://www.vhv.rs/dpng/d/279-2798445_plumber-clipart-icon-plumbing-hd-png-download.png" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/teacher/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://img.favpng.com/1/8/21/act-in-home-tutoring-teacher-student-png-favpng-DdqMSVGfDpEvAbuJ82JaNvkKJ_t.jpg" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/repairer/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://us.123rf.com/450wm/lineartist/lineartist1708/lineartist170801449/83833533-cartoon-electrician-repairing-refrigerator-vector-concept.jpg?ver=6" />
                </Card>
                
              </Link>
            </Col>
            <Col style={{marginBottom:'5px',paddingRight:'0px',paddingLeft:'0px'}}>
              <Link to={`/service/tiles/order`}>
              <Card className="service">
                  <Card.Img variant="top" width={2} height={80} src="https://png.clipart.me/istock/previews/5824/5824609-laying-tiles.jpg" />
                  {/* <Card.Title style={{textAlign:'center',color:'red',fontWeight:'bold'}}>Tiles Mechanic</Card.Title> */}
                </Card>
                
              </Link>
            </Col>
          </Row>
          <div style={{textAlign:'center',paddingBottom:'30px'}}>
            <Link to={`/workers/registration`} style={{textAlign:'center'}} ><Button className="workers" >Workers Registration Form</Button>  </Link>
          </div>
      </div>
      </div>
      
      
  
      <div style={{paddingLeft:"15px",paddingRight:"15px",textAlign:'center',marginBottom:'10px',cursor:'pointer'}}>
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

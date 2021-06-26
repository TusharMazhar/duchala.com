import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import Rating from './Rating'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import './Product.css'

const Product = ({ product }) => {
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading} = productTopRated
  return loading?(
     <Loader />
  ):(
    <Card className='my-3 p-3 rounded' style={{border:'1px solid #0B8A55'}} >
      <Card.Img src={product.image} variant='top' height="200px"/>
      <Card.Body>
          <Card.Title as='div' >
            <strong>{product.name.substr(0,14)}</strong>
          </Card.Title>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} রিভিউ`}
          />
        </Card.Text>

        <Card.Text as='h5' style={{marginTop:'5px'}}>{product.price} টাকা/কেজি</Card.Text>
        <div style={{textAlign:'center'}}>
        <Link to={`/product/${product._id}`}>
          <Button  className="product">
              ব্যাগে যোগ করুন
          </Button>
        </Link>
        </div>
      </Card.Body>   
    </Card>

  )
}

export default Product

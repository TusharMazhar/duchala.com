import React from 'react'
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import Rating from './Rating'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const Product = ({ product }) => {
  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading} = productTopRated
  return loading?(
     <Loader />
  ):(
    <Card className='my-3 p-3 rounded' style={{border:'1px solid #0B8A55'}}>
        <Card.Img src={product.image} variant='top' />
      <Card.Body>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>{product.price} Taka</Card.Text>
        <div style={{textAlign:'center'}}>
        <Link to={`/product/${product._id}`}>
          <Button  style={{backgroundColor:'#0B8A55'}}>
              Add To Cart
          </Button>
        </Link>
        </div>
      </Card.Body>   
    </Card>

  )
}

export default Product

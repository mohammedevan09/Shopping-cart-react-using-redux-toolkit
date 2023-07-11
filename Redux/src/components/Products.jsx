import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { STATUSES, fetchProducts } from '../store/productSlice'

const Products = () => {
  const dispatch = useDispatch()

  const { data: products, status } = useSelector((state) => state.product)

  // const [products, setProducts] = useState([])

  useEffect(() => {
    dispatch(fetchProducts())

    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   setProducts(data)
    // }
    // fetchProducts()
  }, [])

  const handleAdd = (prod) => {
    dispatch(add(prod))
  }

  switch (status) {
    case STATUSES.LOADING:
      return <h1>Loading....</h1>
      break
    case STATUSES.ERROR:
      return <h1>Error</h1>
      break
  }

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="image-details">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-details">
            <h4 className="title">
              {product.title.length > 30
                ? product.title.substring(0, 30) + '...'
                : product.title}
            </h4>
            <h4
              className={`${product.price > 100 ? 'high-price' : 'low-price'}`}
            >
              {product.price}
            </h4>
          </div>
          <div className="add-cart" onClick={() => handleAdd(product)}>
            Add to cart
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products

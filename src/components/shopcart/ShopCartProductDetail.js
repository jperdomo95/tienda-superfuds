import { useState } from 'react'
import ProductCounter from './ProductCounter'
import formatter from '../../helpers/NumberFormat'

const ShopCartProductDetail = ({ product, removeFromCart }) => {

  let [price, setPrice] = useState(product.price_real)

  const handleChangeAmount = amount => setPrice(amount * product.price_real)

  return (
    <div className="row mb-3">
      <div className="col-2 col-lg-2">
        <div>
          <img src={product.thumbnail} alt={product.title} className="shopcart-product-image img-fluid grow"/>
        </div>
      </div>
      <div className="col-8 col-lg-3">  
        <div className="d-flex flex-column">
          <p className="fw-bolder mb-2">{product.title}</p>
          <p className="fw-light mb-2">x {product.units_sf} units - {product.net_content} c/u</p>
          <p className="fw-bolder text-success mb-2">{product.supplier}</p>
        </div>
      </div>
			<div
        className="col-2 d-lg-none cursor-pointer d-flex align-items-center"
        onClick={()=>removeFromCart(product)}
      >
        <i className="bi bi-trash text-secondary fs-3"></i>
      </div>
      <div className="col-6 col-lg-2 d-flex justify-content-around align-items-center">
        <ProductCounter changeAmount={handleChangeAmount}/>
      </div>
      <div className="col-6 col-lg-5 d-flex justify-content-center justify-content-lg-around align-items-center">
        <p className="fw-bolder fs-2 mb-0">
          <span className="text-success"> $ </span>
          {formatter.format(price)}
        </p>
				<div
          className="cursor-pointer d-none d-lg-block grow-4"
          onClick={()=>removeFromCart(product)}
        >
          <i className="bi bi-trash text-secondary fs-3"></i>
        </div>
      </div>
    </div>
  )
}
export default ShopCartProductDetail
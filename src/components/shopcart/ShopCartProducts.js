import ShopCartProductDetail from './ShopCartProductDetail'
import { connect } from 'react-redux'
import { removeFromCart } from '../../actions'

const ShopCartProducts = ({ products, removeFromCart }) => (
  <div>
    <div className="row text-end">
      <p className="mb-0 fw-bolder">
        <span className="fw-bolder text-success">{products.length}</span>
        <span className="fw-bolder"> items</span>
      </p>
    </div>
    <div className="row fw-bolder text-center mb-3">
      <span className="col-12 col-lg-5">Item</span>
      <span className="col-lg-2 d-none d-lg-inline">Cantidad</span>
      <span className="col-lg-4 d-none d-lg-inline">Precio</span>
    </div>
    {
      products.map(product => (
        <ShopCartProductDetail
          removeFromCart={removeFromCart}
          product={product}
        />
      ))
    }
  </div>
)

const mapStateToProps = (query) => ({ query })

const mapDispatchToProps = {
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartProducts)
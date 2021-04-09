import { Component } from 'react'
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import './ShopCart.sass'
import ShopCartProducts from './ShopCartProducts'
import ShopCartLayout from './ShopCartLayout'

class ShopCart extends Component {

  handleCloseShopCart = () => this.props.dispatch({ type: 'CLOSE_SHOP_CART' })

  render () {
    return createPortal(
      <ShopCartLayout isOpen={this.props.isOpen} closeShopCart={this.handleCloseShopCart}>
        <ShopCartProducts products={this.props.cart}/>
      </ShopCartLayout>,
      document.getElementById('cart')
    )
  }
}

const mapStateToProps = ({ cart }, props) => ({ cart })

export default connect(mapStateToProps)(ShopCart)
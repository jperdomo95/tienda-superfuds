import { Component } from 'react'
import Http from '../../services'
import Product from './Product'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.carousel.css'
import Loading from '../Loading'
import { connect } from 'react-redux'
import ShopCart from '../shopcart'
import carouselOptions from './carouselOptions'
import './ProductsList.sass'

class ProductsList extends Component {
  state = {
    options: carouselOptions,
    isLoading: true
  }

  componentDidMount () {
    this.getProduct()
  }

  componentDidUpdate () {
    this.addZindexToCarouselItems()
  }

  handleAddToCart = product => {
    const { dispatch, cart } = this.props
    if(cart.filter( item => item.id === product.id).length)
      return dispatch({ type: 'OPEN_SHOP_CART' })
    dispatch({ type: 'OPEN_SHOP_CART' })
    dispatch({ type: 'ADD_TO_CART', payload: product})
  }

  getProduct = async () => {
    try {
      const products = await Http.get('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
      this.props.dispatch({ type: 'ADD_PRODUCTS', payload: products })
      this.addZindexToCarouselItems()
      this.setState({ isLoading: false })
    } catch (error) {
      console.log(error)
    }
  }

  addZindexToCarouselItems () {
    const el = document.getElementsByClassName('owl-item')
    for (let i = 0; i < el.length; i++) el[i].style.zIndex = `-${i}`
  }
  
  render () {
    return (
      <div className="m-5">

        <ShopCart isOpen={this.props.showCart}/>
        <div className="d-flex align-items-center mb-3">
          <h1 className="fw-bolder me-md-3 mb-0">Nuevo en SuperFuds</h1><span className="fw-bolder text-success">Ver más</span>
        </div>
        {
        this.state.isLoading ? <Loading isOpen={this.state.isLoading}/> :
          (<OwlCarousel options={this.state.options}>
            {this.props.products.length && this.props.products
              .filter(product => product.title.toLowerCase().includes(this.props.query.toLowerCase()))
              .map((product, i) => (
                  <Product
                    id={product.id}
                    key={product.id}
                    product={product}
                    addToCart={this.handleAddToCart}
                  />
              ))}
          </OwlCarousel>)
        }
      </div>
    )
  }
}

const mapStateToProps = ({ showCart, products, cart, query }, props) => {
  return { showCart, products, cart, query }
}

export default connect(mapStateToProps)(ProductsList)
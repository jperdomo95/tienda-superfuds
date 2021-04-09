import './Product.sass'
import formatter from '../../helpers/NumberFormat'

const Product = ({ product , addToCart, valueIndex }) => {
  const {
    thumbnail,
    subcategory,
    category,
    net_content,
    title,
    price_real,
    units_sf,
    sellos
  } = product

  return (
    <div className="m-2 product-card rounded grow-1">
      <div className="shadow-sm pb-2">
        <div className="d-flex justify-content-center">
          <div className="product-image d-flex justify-content-center align-items-center">
            <img className="img-fluid" src={thumbnail} alt={subcategory}/>
          </div>
          <div className="d-flex flex-column">
            {sellos.map(({ image, name }) => (
              <div className="seal position-relative mb-2 grow" key={name}>
                <img src={image} alt={name}/>
                <div className="arrow-right position-absolute"></div>
                <div className="seal-tooltip bg-dark-blue pb-1 ps-2 pe-4 rounded ms-2">
                  <p className="mb-0 h5 text-warning"><small>Producto</small></p>
                  <p className="mb-0 text-white"><small>{name}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="mx-2 text-secondary"/>
        <div className="mx-2">
          <div className="d-flex justify-content-between">
            <div>
              <h6 className="text-success mb-0">{category}</h6>
            </div>
            <h6 className="bg-success rounded-pill py-1 px-3 text-center mb-0">
              {net_content}
            </h6>
          </div>
          <div className="text-ellipsis w-100 h5 overflow-hidden my-2">{title}</div>
          <div>
            <span className="h4 fw-bolder"><span className="text-success">$</span> {formatter.format(price_real)}</span>
            <span className="h6 fw-light"> x {units_sf} units</span>
          </div>
        </div>
      </div>
      <div
        onClick={()=>addToCart(product)}
        className="bg-success py-2 text-center fw-bold add-to-cart rounded-bottom">Agregar al carrito</div>
    </div>
)}

export default Product
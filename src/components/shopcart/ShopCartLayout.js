const ShopCartLayout = ({ children, closeShopCart, isOpen }) => (
  <>
    <div className={`backdrop position-fixed top-0 bottom-0 start-0 end-0 overflow-scroll px-4 ${isOpen ? '' : 'd-none'}`} onClick={()=>closeShopCart()}></div>
    <div className={`shop-cart bg-white position-fixed top-0 vh-100 start-70 overflow-scroll end-0 px-4  ${isOpen ? '' : 'd-none'}`} >
      <div className="d-flex align-items-center cursor-pointer" onClick={()=>closeShopCart()}>
        <span className="text-success fs-1">{'<'}</span>
        <span className="ms-3">Volver a la tienda</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bolder">Carrito de Compras</h2>
      </div>
      {children}
    </div>
  </>
)

export default ShopCartLayout
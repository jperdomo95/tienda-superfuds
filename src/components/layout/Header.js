import { setQueryFromProducts, openCart } from '../../actions'
import { useEffect, useState } from "react"
import { connect } from 'react-redux'

const Header = ({ setQueryFromProducts, openCart }) => {
  
  const [query, setQuery] = useState('')
  useEffect(()=>setQueryFromProducts(query),[query])

  return (
    <header>
      <nav className="navbar navbar-dark bg-green p-4 row">
        <em className="text-white fw-bold col">Superfüds</em>
        <div className="d-none d-md-flex input-group col rounded-pill overflow-hidden px-0 grow-1">
          <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border-0 px-2 form-control shadow-none"
          placeholder="Buscar producto"
          />
          <i className={`input-group-text text-secondary bg-white border-0 cursor-pointer bi ${query ? 'bi-x-circle' : 'bi-search'}`} onClick={()=>setQuery('')} id="basic-addon1"></i>
        </div>
        <div className="d-flex justify-content-end justify-content-lg-between align-items-center col">
          <span className="text-white fw-bold flex-lg-grow-1 grow-4 cursor-pointer text-center">
						<i className="bi bi-cart-fill fs-4 " onClick={()=>openCart()}></i>
					</span>
          <div className="d-none d-lg-flex align-items-center">
            <span className="text-end me-2">
              <p className="mb-0 fs-6 text-white fw-bolder">Julio Perdomo</p>
              <p className="mb-0 text-right"><small>Mi perfil <i className="bi bi-chevron-down"></i></small></p>
            </span>
            <span className="text-white">
							<i className="bi bi-person-circle fs-3"></i>
						</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
const mapDispatchToProps = {
  setQueryFromProducts,
  openCart
}
export default connect(()=>({}), mapDispatchToProps)(Header)
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: payload
      }
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, payload]
      }
    case 'OPEN_SHOP_CART':
      return {
        ...state,
        showCart: true
      }
    case 'CLOSE_SHOP_CART':
      return {
        ...state,
        cart: [...state.cart],
        showCart: false
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: [...state.cart.filter(product => product.id !== payload.id)]
      }

    case 'SET_QUERY':
      return {
        ...state,
        query: payload
      }
      
      default:
      return state
  }
}

export default reducer
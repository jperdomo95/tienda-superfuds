const removeFromCart = payload => ({
  type: 'REMOVE_FROM_CART',
  payload,
})

const setQueryFromProducts = payload => ({
  type: 'SET_QUERY',
  payload,
})

const openCart = () => ({
  type: 'OPEN_SHOP_CART',
})

export { removeFromCart, setQueryFromProducts, openCart }
import { useState, useEffect } from 'react'

const ProductCounter = ({ changeAmount }) => {
  
  let [count, setCount] = useState(1)

  useEffect(()=>changeAmount(count), [count])

  return (
    <>
      <i
        className="fs-3 cursor-pointer bi bi-dash-circle text-secondary"
        onClick={()=>setCount(--count)}
      >
      </i>
      <span className="fs-4"> {count} </span>
      <span
        className="fs-3 cursor-pointer bi bi-plus-circle text-success"
        onClick={()=>setCount(++count)}
      >
      </span>
    </>
  )
}

export default ProductCounter
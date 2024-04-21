import React from 'react'

function ProductCard({name, price, brand, category}) {
  return (
    <div className='border-2 border-cyan-500 rounded-lg m-2 p-2'>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <span>{price}</span>
        </div>
        <div>
            <span>{brand}</span>
        </div>
        <div>
            <span>{category}</span>
        </div>
    </div>
  )
}

export default ProductCard
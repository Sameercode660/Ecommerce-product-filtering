import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'


function App() {


  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  async function handleFetchCategoryData(category) {
    try {
      const data = {
        category
      }

      const response = await axios.post('http://localhost:8080/product/findProduct', data)

      setData(response.data.response)
      console.log(response.data.response)
    } catch (error) {
      alert('unable to fetch category data')
    }
  }

  async function handleFetchData() {
    try {

      const response = await axios.post('http://localhost:8080/product/allProduct')

      setData(response.data.response)

      setLoading(false)

    } catch (error) {
      alert('unable to fetch the data')
      console.log(error)
    }
  }


  useEffect(() => {
    handleFetchData()
  }, [])
  return (
    <>
      <div className='w-full h-[100dvh] flex items-center justify-center'>
        <div className='border-2 border-red-500'>

          <div>
            <input type="checkbox" name="" value={'Electronics'} id="" onChange={(e) => {
              if (e.target.checked) {
                handleFetchCategoryData(e.target.value)
              } else {
                handleFetchData()
              }
            }} />
            <label htmlFor="">Electronics</label>
          </div>
          <div>
            <input type="checkbox" name="" value={'Clothing'} id="" onChange={(e) => {
              if (e.target.checked) {
                handleFetchCategoryData(e.target.value)
              } else {
                handleFetchData()
              }
            }} />
            <label htmlFor="">Clothing</label>
          </div>
          <div>
            <input type="checkbox" name="" value={'Home & Kitchen'} id="" onChange={(e) => {
              if (e.target.checked) {
                handleFetchCategoryData(e.target.value)
              } else {
                handleFetchData()
              }
            }} />
            <label htmlFor="">Home & Kitchen</label>
          </div>
          <div>
            <input type="checkbox" name="" value={'Sports & Outdoors'} id="" onChange={(e) => {
              if (e.target.checked) {
                handleFetchCategoryData(e.target.value)
              } else {
                handleFetchData()
              }
            }} />
            <label htmlFor="">Sports & Outdoors</label>
          </div>
        </div>
        <div className='border-2 border-red-500 w-[800px] h-[400px] flex flex-wrap overflow-auto'>
          {
            loading ? <span>Loading...</span> : (
              data.map((product) => (
                <ProductCard name={product.name} price={product.price} brand={product.brand} category={product.category}></ProductCard>
              ))
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
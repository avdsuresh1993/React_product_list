import { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from './components/product/Products';
import './components/product/Products.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products")
  }, [])

  async function fetchData(url) {
    try {
      const { data } = await axios.get(url)
      setData(prev=>[...prev,...data])
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
    <div className='nav-bar'>
      <img src="https://www.aswatson.com/wp-content/uploads/2023/07/our_products_icon_en_v2.png" alt="product image" />
    </div>
      <div className='container'>
        {
      data.length>0 && data.map(elt=>{
      
        return(
          <>
           <Products  product={elt}/>
          </>
        )
      })
     }
      </div>
    </>
  )
}

export default App

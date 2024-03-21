import { useEffect,useState } from 'react'
import './App.css'
//import { Card } from './Components/Card'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { NavBar } from './Components/NavBar'
import { ProductContainer } from './Components/ProductContainer'


function App() {
  
  const [Products,setProducts]=useState([]);
  const [Cart,setCart]=useState([]);
  useEffect(()=>{ 
      fetch("http://localhost:5174/Product.json").then((response)=>response.json())
      .then((result)=>{
        if(result.data.length>0){
          setProducts(result.data)
        }

      }).catch((error)=> console.log(error))
      return ()=>{};
  },[]);
  return (
    <>
      <NavBar Cart={Cart}/>
      <Header/>
      <div className="container p-5" >
        <div className="row  gx-2 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <ProductContainer Products={Products} Cart={Cart} setCart={setCart}/>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default App

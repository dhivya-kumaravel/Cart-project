import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import Cart from "./Component/Cart"
import { useState } from 'react'


const App = () => {
  const [cart, setCart] = useState([])
  return (
    <>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className="container p-5">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
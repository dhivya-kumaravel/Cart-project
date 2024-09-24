/* eslint-disable react/prop-types */

import { useState } from "react";
import data from "../assets/products.json";
import Product from './Product';


const Home = ({cart, setCart}) => {
    const [products] = useState(data);
  return (
    <div className='flex flex-wrap gap-8 items-center justify-center'>
        {products.map((product) => (
            <Product key = {product.id} product = {product} cart= {cart} setCart={setCart}/>
            
        ))}
    </div>
  )
}

export default Home
/* eslint-disable react/prop-types */


import { useEffect, useState } from "react"


const Cart = ({cart}) => {
    const [count, setCount]=useState(1)

    const [total, setTotal]=useState(0)
    useEffect(()=>{
        setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.price),0))
    },[cart])
  return ( <>
  <h2 className="p-3 font-bold text-purple-800 text-xl">Cart Items :</h2>
    <div className="cart-container flex flex-col gap-4">

        {cart.map((product) =>(
            <div className="flex gap-4 items-center p-4 border shadow-lg" key={product.id}>
            <div>
                <img className= "w-28 h-28" src={product.img} alt="image" />
            </div>
            <div className="flex gap-4">
                <h2 className="pr-4 font-bold">{product.name} </h2>
                <p>Price Rs: {product.price}</p>
                <div className="flex ml-12 gap-4 items-center justify-center border">
                <button className="border w-4 h-6 flex items-center justify-center bg-pink-300" onClick = {()=>
    { setCount(count +1);
        console.log(count)}}>+</button>
                <p>{count}</p>
                <button className="border w-4 h-6 flex items-center justify-center bg-pink-300" onClick = {()=>
    { setCount(count -1);
        console.log(count)}}>-</button></div>
            </div>
        </div>
        ) )}
        </div>
    <h1 className="p-4 text-cyan-400 font-bold text-xl flex items-center justify-center">Total Price : Rs. {total}/-</h1>
     </>
  )
}

export default Cart
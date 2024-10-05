import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */




const Cart = ({cart, setCart}) => {
    
    const removeCart = () => {
        setCart(cart => cart.filter(product => product.id !== product.id));
        
       }
    
        const count = 1

    const [total, setTotal]=useState(0)
    useEffect(()=>{
        setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.price),0))
    },[cart])
  return ( <>
  <h2 className="p-3 font-bold text-purple-800 text-xl">Cart Items :</h2>
    <div className="cart-container flex flex-col gap-4 items-center justify-center ml-8">

        {cart.map((product) =>(
            <div className="flex gap-4 items-center p-4 border shadow-lg" key={product.id}>
            <div>
                <img className= "w-28 h-28" src={product.img} alt="image" />
            </div>
            <div className="flex gap-4">
                <h2 className="pr-4 font-bold">{product.name} </h2>
                <p>Price Rs: {product.price}</p>
                <div className="flex ml-12 gap-8 items-center justify-center">
                <button className=" flex items-center justify-center border border-cyan-500 rounded" onClick = {()=>
    { alert("Cant increase the quantity in cart")}}>Qnty</button>
    <p>:</p>
                <p className="bg-pink-200">{count}</p>
                </div>
        <button className='border bg-red-600 p-1 rounded text-white hover:bg-blue-900 hover:text-yellow-400 shadow-md ml-16 h-8 flex items-center justify-center mt-2' onClick={removeCart}>Remove</button>
            </div>
        </div>
        ) )}
        </div>
    <h1 className="p-4 text-cyan-400 font-bold text-xl flex items-center justify-center">Total Price : Rs. {total}/- (Discount 5%)</h1>
     </>
  )
}
export default Cart
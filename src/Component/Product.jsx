/* eslint-disable react/prop-types */

const Product = ({product, cart, setCart}) => {
    const addCart = () => {
        setCart([...cart, product])}

  return (
    <div className='cart border border-black w-40 items-center justify-center text-center p-2'>
        <div><img className='w-44 h-40' src={product.img} alt={product.name} /></div>
        <div><h2 className='font-bold'>{product.name}</h2>
        <p>Price Rs:{product.price}</p>
        <button className='border border-4 border-yellow-600 p-1 rounded bg-slate-600 text-white hover:bg-green-500 hover:shadow-md hover:text-lg' onClick={addCart}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product
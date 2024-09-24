
/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
const Header = ({cart}) => {
  return (
    <div className='h-12 flex items-center justify-around bg-gradient-to-r from-pink-400 via-slate-500 to-pink-600 italic mx-auto'>
        <div className="underline decoration-white text-yellow-300 text-2xl">ShopsWithDhi</div>
        <ul className='flex gap-5 text-2xl text-purple-300'>
            <li className='hover:underline decoration-yellow-300 hover:text-red-300'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className='hover:underline decoration-yellow-300 hover:text-red-300'>
            <Link to={"/Cart"}>
                <span className='bg-yellow-200 text-s rounded-full w-12 h-4 text-black'>{cart.length}</span>
                Cart</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header
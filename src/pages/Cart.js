import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="p-12 max-w-2xl mx-auto">
      {
        cart.length > 0 ? 
        (<div  className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            {
              cart.map( (item, index) =>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="mb-4">
              <div className="text-lg font-semibold">Your Cart</div>
              <div className="text-gray-600">Summary</div>
              <p className="text-gray-800"><span className="font-semibold">Total Items: {cart.length}</span></p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">Total Amount: ${totalAmount}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>) :
        (<div className="text-center">
          <h1  className="text-2xl font-bold mb-4">Cart Empty</h1>
          <NavLink to={"/"}>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300">Shop Now</button>
          </NavLink>
          </div>)
      }
    </div>
  )
}

export default Cart

import React from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';

import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Item  Remove");
  }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <div>

      <div>
        <img src={item.image} className="w-24 h-24 object-cover rounded-md"/>
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold mb-1">{item.title}</h1>
        <h1 className="text-gray-600 text-sm mb-2">{item.description}</h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-semibold">{item.price}</p>
          <div className="text-red-500 hover:text-red-600 transition duration-300 cursor-pointer" onClick={removeFromCart}>
          <MdOutlineDeleteForever className="w-6 h-6" />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default CartItem

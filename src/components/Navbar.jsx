import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbSquareRoundedLetterB } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <TbSquareRoundedLetterB size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best 
                <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>
        
    </div>
  )
}

export default Navbar
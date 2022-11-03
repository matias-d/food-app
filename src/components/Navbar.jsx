import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import {
    BsFillCartFill} from 'react-icons/bs'
    
import {
    TbTruckDelivery ,
    TbHeart,
    TbWallet,
    TbHelp,
    TbFileDollar,
    TbArrowAutofitDown,
    TbUsers
} from 'react-icons/tb'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [picked, setPicked] = useState(true)

    

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
        <div className='flex items-center '>
            <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                <AiOutlineMenu  size={30}  />
            </div>
            <Link to='/'>
                <h1 className='text-2xl sm:text-3xl px-2'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
            </Link>
            <div className='hidden lg:flex items-center gap-2 bg-gray-200 rounded-full p-1 text[14px] transition-colors '>
                <p className={ picked ? `bg-black text-white rounded-full p-2 cursor-pointer transition-colors` : 'p-2 cursor-pointer '} onClick={() => setPicked(true)}>Delivery</p>
                <p className={ !picked ? `bg-black text-white rounded-full p-2 cursor-pointer transition-colors` : 'p-2 cursor-pointer'} onClick={() => setPicked(false)}>Pickup</p>
            </div>
        </div>
        {/*Search Input*/}
        <div className='flex bg-gray-200 rounded-full items-center px-2 w-[200px]  sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent p-2 outline-none w-full'  type='text' placeholder='Search foods'/>
        </div>
        {/*Cart button */}
        <button className='bg-black text-white hidden md:flex items-center gap-1 py-2 rounded-full'>
            <BsFillCartFill /> Card
        </button>
        {/*Mobile Menu */}
        {/*Overlay */}
        <div className={`bg-black/80 fixed w-full h-screen z-10 top-0 left-0 ${!open && 'hidden'} `}>
        {/*Side drawer Menu*/}

            <div className={`fixed top-0 ${open ? 'left-0 duration-300' : '-left-80 duration-300'} w-[250px] lg:w-[300px] h-screen bg-white z-10 bg-white relative  `}>
                <AiOutlineClose  size={30} className='text-gray-600 absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(!open)}/>
                <h2 className='text-2xl py-4 px-6'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800 gap-6'>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbTruckDelivery size={25} className=''/> Orders
                        </li>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbHeart size={25} className=''/> Favorites
                        </li>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbWallet size={25} className=''/> Wallet
                        </li>
                        <li className=' cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbHelp size={25} className=''/> Help
                        </li>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbFileDollar size={25} className=''/> Promotions
                        </li>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbArrowAutofitDown size={25} className=''/> Best One
                        </li>
                        <li className='cursor-pointer text-xl flex items-center gap-4 hover:bg-gray-200 p-2 rounded-full'>
                            <TbUsers size={25} className=''/> Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

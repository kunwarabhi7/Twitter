import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import TwitterTabs from './TwitterTabs'
const Header = () => {
  return (
    <div className='m-4 '>
      <div className='flex items-center '>
        <div className='sm:flex space-x-8 hidden  mx-1'>

        <BsTwitter size={30} className='hidden sm:block' />
       <p className='text-xl font-semibold'>Home</p>
        </div>
        <img className='w-18 h-12 sm:hidden  rounded-full' src='https://pbs.twimg.com/profile_images/1622640106938171392/BHpsCosP_400x400.jpg' />
        <BsTwitter size={25} className='ml-20  sm:hidden text-blue-500' />
      </div>

    </div>
  )
}

export default Header

import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {IoIosNotificationsOutline} from 'react-icons/io'

const NavBar = () => {
  return (
    <div className='flex fixed bottom-2 left-6 mobile:left-16 sm:hidden  space-x-14 mobile:space-x-24  justify-evenly items-center '>
        <BiHomeCircle size={30} />
        <AiOutlineSearch size={30} />
        <IoIosNotificationsOutline size={30} />
        <MdEmail  size={30}/>
      
    </div>
  )
}

export default NavBar

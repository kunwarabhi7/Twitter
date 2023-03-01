
import {BiHomeCircle} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsBookmark} from 'react-icons/bs'
import {CiCircleMore} from 'react-icons/ci'
import {FaTwitterSquare , FaUser}  from 'react-icons/fa'
import {IoIosNotificationsOutline} from 'react-icons/io'



const LeftBar = () => {
  return (
    <div className='hidden sm:flex flex-col justify-start space-y-6 ml-2 sm:ml-6 md:10 h-screen'>
      <BiHomeCircle size={30}/>
      <AiOutlineSearch size={30}/>
      <MdEmail  size={30}/>
      <BsBookmark  size={30}/>
      <IoIosNotificationsOutline  size={30}/>
      <FaTwitterSquare size={30}/>
      <FaUser size={30}/>
      <CiCircleMore size={30}/>
    </div>
  )
}

export default LeftBar

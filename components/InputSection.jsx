import {RiFileGifLine} from 'react-icons/ri'
import {MdBrokenImage} from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'


const InputSection = () => {
  return (
    <div className='flex items-center justify-around mt-8 space-x-2'>
        
<RiFileGifLine className='bg-blue-500' />
<MdBrokenImage className='bg-blue-500'/>
<BsFillEmojiSmileFill className='bg-blue-500'/>
<IoLocationSharp className='bg-blue-500' />
<button className='p-1 bg-blue-400 rounded-full'>Tweet</button>
    </div>
  )
}

export default InputSection

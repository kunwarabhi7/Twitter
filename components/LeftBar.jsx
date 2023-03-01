import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaTwitterSquare, FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

const LeftBar = () => {
  return (
    <div className="hidden sm:flex flex-col w-48  space-y-6 ml-2 sm:ml-6 md:10 h-screen">
      <div className="flex">
        <BiHomeCircle size={30} />
        <p className="hidden md:block ml-2">Home</p>
      </div>
      <div className="flex">
        <AiOutlineSearch size={30} />
         <p className="hidden md:block ml-2">Explore</p>
      </div>
      <div className="flex">
        <IoIosNotificationsOutline size={30} />
         <p className="hidden md:block ml-2">Notifications</p>
      </div>{" "}
      <div className="flex">
        <MdEmail size={30} />
         <p className="hidden md:block ml-2">Messages</p>
      </div>{" "}
      <div className="flex">
        <BsBookmark size={30} />
         <p className="hidden md:block ml-2"> Bookmarks</p>
      </div>{" "}
      <div className="flex">
        {" "}
        <FaTwitterSquare size={30} className="text-blue-500 bg-blue-500" />
         <p className="hidden md:block ml-2">Twitter Blue</p>
      </div>{" "}
      <div className="flex">
        <FaUser size={30} />
         <p className="hidden md:block ml-2">Profile</p>
      </div>
      <div className="flex">
        {" "}
        <CiCircleMore size={30} />
         <p className="hidden md:block ml-2">More</p>
      </div>
    </div>
  );
};

export default LeftBar;

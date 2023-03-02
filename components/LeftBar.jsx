import { BiHomeCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaTwitterSquare, FaUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import Footer from './Footer'

const LeftBar = () => {
  return (
    <div>
    <div className="hidden border-r-2 sm:flex flex-col w-16 md:w-[362px]  space-y-6 ml-2 sm:ml-6 md:10 h-screen">
      <div className="w-275">
        <div className="flex ">
          <BiHomeCircle size={30} />
          <p className="hidden ml-2 md:block">Home</p>
        </div>
        <div className="flex">
          <AiOutlineSearch size={30} />
          <p className="hidden ml-2 md:block">Explore</p>
        </div>
        <div className="flex">
          <IoIosNotificationsOutline size={30} />
          <p className="hidden ml-2 md:block">Notifications</p>
        </div>{" "}
        <div className="flex">
          <MdEmail size={30} />
          <p className="hidden ml-2 md:block">Messages</p>
        </div>{" "}
        <div className="flex">
          <BsBookmark size={30} />
          <p className="hidden ml-2 md:block"> Bookmarks</p>
        </div>{" "}
        <div className="flex">
          {" "}
          <FaTwitterSquare size={30} className="text-blue-500 bg-blue-500" />
          <p className="hidden ml-2 md:block">Twitter Blue</p>
        </div>{" "}
        <div className="flex">
          <FaUser size={30} />
          <p className="hidden ml-2 md:block">Profile</p>
        </div>
        <div className="flex">
          {" "}
          <CiCircleMore size={30} />
          <p className="hidden ml-2 md:block">More</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeftBar;

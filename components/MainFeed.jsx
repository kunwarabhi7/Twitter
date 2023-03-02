import InputSection from "./InputSection";
import TwitterTabs from "./TwitterTabs";

const MainFeed = () => {
  return (
    <div className="md:h-[107px] h-[115px] m-4   ">
      <div className="w-full mb-10">Home</div>
      <div className="flex  justify-center space-x-40 border-b-[1px] border-gray-800 pb-2">
        <h1 className="text-white border-b-2 border-blue-500 max-w-[291px]">
          For you
        </h1>

        <h1 className="text-gray-400 max-w-[291px]">Following</h1>
      </div>
      <div className="flex border-2">
        <div className=" ">
          <img
            className="w-16 h-14 p-2 rounded-full"
            src="https://pbs.twimg.com/profile_images/1622640106938171392/BHpsCosP_400x400.jpg"
          />
        </div>
        <div className="p-2">
          <input
            className="h-13 w-36 md:w-[502px] "
            placeholder="What's happening ?"
          />
          <p className="h-12 w-36 md:w-[502px]">
            <InputSection />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;

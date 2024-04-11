import { Link } from "react-router-dom";
import HomeIcon from "../assets/Icons/HomeIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import MobileViewIcon from "../assets/Icons/MobileViewIcon";
import UserIcon from "../assets/Icons/UserIcon";

export default function HeaderPage() {
  return (
    <header className="flex justify-between">
      <div className="flex gap-1 items-center">
        <div>
          <HomeIcon />
        </div>
        <span className="font-bold text-lg">lifella</span>
      </div>
      <div className="flex gap-2 items-center border border-pink-900 rounded-full py-2 px-4 shadow-md shadow-pink-400">
        <div>Anywhere</div>
        <div className="border-l border-pink-900"></div>
        <div>Any week</div>
        <div className="border-l border-pink-900"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white rounded-full p-1">
          <SearchIcon />
        </button>
      </div>
      <Link
        to={"/login"}
        className="flex gap-2 items-center border border-pink-900 rounded-full py-2 px-4"
      >
        <div>
          <MobileViewIcon />
        </div>
        <div className="bg-primary rounded-full text-white border-2 border-pink-900 overflow-hidden">
          <UserIcon />
        </div>
      </Link>
    </header>
  );
}

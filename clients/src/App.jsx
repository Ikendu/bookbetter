import "./App.css";
import HomeIcon from "./assets/Icons/HomeIcon";
import MobileViewIcon from "./assets/Icons/MobileViewIcon";
import SearchIcon from "./assets/Icons/SearchIcon";
import UserIcon from "./assets/Icons/UserIcon";

function App() {
  return (
    <div>
      <header className="p-4 flex justify-between">
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
        <div className="flex gap-2 items-center border border-pink-900 rounded-full py-2 px-4">
          <div>
            <MobileViewIcon />
          </div>
          <div className="bg-primary rounded-full text-white border-2 border-pink-900 overflow-hidden">
            <UserIcon />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

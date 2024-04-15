import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PlacesPage } from "./PlacesPage";
import UserIcon from "../assets/Icons/UserIcon";
import MyPlacesIcon from "../assets/Icons/MyPlacesIcon";
import MyBookingsIcon from "../assets/Icons/MyBookingsIcon";

const AccountPage = () => {
  const [loading, setLoading] = useState(true);
  const [loginMessage, setLoginMessage] = useState(false);
  const { user, ready, setUser } = useContext(UserContext);
  const redirect = useNavigate();

  setTimeout(() => {
    setLoading(false);
    setLoginMessage(true);
  }, 7000);

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl">
        <p>{loading && `Loading...`}</p>
        <div>{loginMessage && <div>Please login</div>}</div>
      </div>
    );
  }
  if (ready && !user) {
    return <NavLink to={`/login`} />;
  }

  const { subpage } = useParams();
  console.log(subpage);

  const linkClasses = (type) => {
    let classes = `px-4 py-2 bg-gray-300 rounded-full flex gap-2 items-center`;
    if (type == subpage || (type == `profile` && subpage == undefined)) {
      return `px-4 py-2 bg-primary rounded-full text-white flex gap-2 items-center`;
    }
    return classes;
  };

  const handleLogout = async () => {
    await axios.post(`/logout`);
    redirect(`/`);
    setUser(null);
  };

  return (
    <div>
      <nav className="flex gap-8 justify-center mt-8 items-center">
        <Link className={linkClasses(`profile`)} to={`/account`}>
          <UserIcon />
          My Profile
        </Link>
        <Link className={linkClasses(`places`)} to={`/account/places`}>
          <MyPlacesIcon />
          My Accommodations
        </Link>
        <Link className={linkClasses(`bookings`)} to={`/account/bookings`}>
          <MyBookingsIcon />
          My Bookings
        </Link>
      </nav>
      {subpage === undefined && (
        <div className="  text-center justify-center mx-auto">
          <h2 className="m-10 text-2xl font-bold">Your home page</h2>
          <p>Hello {user?.name}</p>
          <button
            onClick={handleLogout}
            className="bg-primary rounded-full w-1/4 mt-5 p-3 text-white"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === `places` && <PlacesPage />}
    </div>
  );
};

export default AccountPage;

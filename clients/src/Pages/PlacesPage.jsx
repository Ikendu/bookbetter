import { Link } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";

export const PlacesPage = () => {
  return (
    <div className="m-6">
      <div className="text-center">
        <Link className="inline-flex gap-2 items-center bg-primary py-2 px-6 rounded-full cursor-pointer text-white  ">
          <PlusSignIcon />
          Add new
        </Link>
      </div>
    </div>
  );
};

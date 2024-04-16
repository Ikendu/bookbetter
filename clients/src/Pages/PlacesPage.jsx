import { Link, useParams } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";

export const PlacesPage = () => {
  const { action } = useParams();
  console.log(action);
  return (
    <div className="m-6">
      <div className="text-center">
        <Link
          to={"/account/places/new"}
          className="inline-flex gap-2 items-center bg-primary py-2 px-6 rounded-full cursor-pointer text-white  "
        >
          <PlusSignIcon />
          Add new
        </Link>
      </div>
    </div>
  );
};

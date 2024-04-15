import { Link } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";

export const PlacesPage = () => {
  return (
    <div>
      <Link>
        <PlusSignIcon />
        Add new
      </Link>
    </div>
  );
};

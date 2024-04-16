import { Link, useParams } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";

export const PlacesPage = () => {
  const { action } = useParams();
  console.log(action);
  return (
    <div className="m-6">
      {action !== "new" && (
        <div className="text-center">
          <Link
            to={"/account/places/new"}
            className="inline-flex gap-2 items-center bg-primary py-2 px-6 rounded-full cursor-pointer text-white  "
          >
            <PlusSignIcon />
            Add new
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <input
              type="text"
              placeholder="title: for example, my lovely home"
            />
            <input type="text" placeholder="your address"/>
            <input />
          </form>
        </div>
      )}
    </div>
  );
};

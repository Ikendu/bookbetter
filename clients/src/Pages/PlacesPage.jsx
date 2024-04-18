import { Link, useParams } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";
import PetIcon from "../assets/Icons/PetIcon";
import VehicleIcon from "../assets/Icons/VehicleIcon";
import WifiIcon from "../assets/Icons/WifiIcon";
import TVIcon from "../assets/Icons/TVIcon";
import EntranceIcon from "../assets/Icons/EntranceIcon";
import RadioIcon from "../assets/Icons/RadioIcon";

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
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="title" className="text-2xl text-gray-700">
                Title
              </label>
              <p className="text-sm text-gray-400">
                title for your place, it should be short and catchy as in
                advertisement
              </p>
              <input
                type="text"
                id="title"
                placeholder="title: for example, my lovely home"
              />
            </div>

            <div>
              <label htmlFor="address" className="text-2xl text-gray-700">
                Address
              </label>
              <p className="text-sm text-gray-400">Address for this place</p>
              <input type="text" id="address" placeholder="your address" />
            </div>

            <div>
              <label htmlFor="address" className="text-2xl text-gray-700">
                Photos
              </label>
              <p className="text-sm text-gray-400">more = better</p>
              <div className="flex gap-1 text-white">
                <input type="text" placeholder="add using a link ...jpg" />
                <button className="rounded-2xl px-4">Add&nbsp;Photos </button>
              </div>
              <p className="text-sm text-gray-400">More is better</p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <button className="border rounded-2xl bg-transparent p-6 text-2xl">
                  <p className="text-gray-400 text-xs">
                    upload from your device
                  </p>
                  +
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="text-2xl text-gray-700">
                Description
              </label>
              <p className="text-sm text-gray-400">describe the place</p>
              <textarea id="description"></textarea>
            </div>

            <div>
              <h3 className="text-2xl text-gray-700">Perks</h3>
              <p className="text-sm text-gray-400">
                Select all the available perks
              </p>
              <div className="grid grid-cols-3">
                <label>
                  <input type="checkbox" />
                  <WifiIcon />
                  <span>Wifi</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <TVIcon />
                  <span>TV</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <RadioIcon />
                  <span>Radio</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <VehicleIcon />
                  <span>Free parking spot</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <PetIcon />
                  <span>Pet</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <EntranceIcon />
                  <span>Private entrance</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

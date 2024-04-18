import { Link, useParams } from "react-router-dom";
import PlusSignIcon from "../assets/Icons/PlusSignIcon";
import PetIcon from "../assets/Icons/PetIcon";
import VehicleIcon from "../assets/Icons/VehicleIcon";
import WifiIcon from "../assets/Icons/WifiIcon";
import TVIcon from "../assets/Icons/TVIcon";
import EntranceIcon from "../assets/Icons/EntranceIcon";
import RadioIcon from "../assets/Icons/RadioIcon";
import { useState } from "react";

export const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckout] = useState("");
  const [maxGuset, setMaxGuest] = useState(1);
  const [extraInfo, setExtraInfo] = useState("");

  console.log(action);

  function headerInput(text) {
    return (
      <label htmlFor="title" className="text-2xl text-gray-700 font-bold">
        {text}
      </label>
    );
  }

  function descriptionInput(text) {
    return <p className="text-sm text-gray-400">{text}</p>;
  }

  function preInput(header, describe) {
    return (
      <div>
        {headerInput(header)}
        {descriptionInput(describe)}
      </div>
    );
  }
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
              <label
                htmlFor="title"
                className="text-2xl text-gray-700 font-bold"
              >
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="text-2xl text-gray-700  font-bold"
              >
                Address
              </label>
              <p className="text-sm text-gray-400">Address for this place</p>
              <input
                type="text"
                id="address"
                placeholder="your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="text-2xl text-gray-700  font-bold"
              >
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
              <label
                htmlFor="description"
                className="text-2xl text-gray-700  font-bold"
              >
                Description
              </label>
              <p className="text-sm text-gray-400">describe the place</p>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-2xl text-gray-700  font-bold">Perks</h3>
              <p className="text-sm text-gray-400">
                Select all the available perks of your place
              </p>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <WifiIcon />
                  <span>Wifi</span>
                </label>
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <TVIcon />
                  <span>TV</span>
                </label>
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <RadioIcon />
                  <span>Radio</span>
                </label>
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <VehicleIcon />
                  <span>Free parking spot</span>
                </label>
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <PetIcon />
                  <span>Pet</span>
                </label>
                <label className="p-4 border flex gap-2 rounded-xl items-center cursor-pointer">
                  <input type="checkbox" />
                  <EntranceIcon />
                  <span>Private entrance</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-gray-700 font-bold">
                Check in&out time
              </h3>
              <p className="text-sm text-gray-400">
                Add checkin and checkout time, remember to have some time window
                for cleaning the room between guests
              </p>
              <div className="grid grid-flow-col gap-2">
                <div>
                  <p className="font-bold">Check in time</p>
                  <input
                    type="text"
                    placeholder="12:00"
                    value={checkin}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">Check out time</p>
                  <input
                    type="text"
                    placeholder="24:00"
                    value={checkout}
                    onChange={(e) => setCheckout(e.target.value)}
                  />
                </div>
                <div>
                  <p className="font-bold">Max number of guest</p>
                  <input
                    type="text"
                    placeholder="Eg: 4"
                    value={maxGuset}
                    onChange={(e) => setMaxGuest(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-gray-700 font-bold">Extra Info</h3>
              <p className="text-sm text-gray-400">House rules, etc</p>
              <textarea
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
              />
            </div>
            <button className="primary">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

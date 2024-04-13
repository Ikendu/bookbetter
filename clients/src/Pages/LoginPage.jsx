import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();
  const { user, setUser } = useContext(UserContext);
  // const [redirects, setRedirects] = useState(false);

  const userData = { email, password };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", userData);

      console.log(response.data);
      if (response?.data) {
        toast.success(`${response?.data?.name}, you are welcome`);
        setUser(response?.data.name);
        // setRedirects(true);
        redirect("/");
      } else toast.error(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  // if (redirects) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="flex grow items-center  min-h-screen justify-around">
      <div>
        <h1 className="text-center text-2xl">Login</h1>
        <form className=" max-w-2xl m-auto " onSubmit={loginUser}>
          <input
            type="text"
            placeholder="youremail@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Submit</button>
          <div>
            <p className="text-gray-500 text-center">
              Dont have an accout?{" "}
              <Link
                className="underline text-black font-semibold"
                to={`/register`}
              >
                Register now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

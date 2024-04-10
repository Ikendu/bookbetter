import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex grow items-center  min-h-screen justify-around">
      <div>
        <h1 className="text-center text-2xl">Login</h1>
        <form className=" max-w-2xl m-auto ">
          <input type="text" placeholder="youremail@mail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Submit</button>
          <div>
            <p className="text-gray-500">
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

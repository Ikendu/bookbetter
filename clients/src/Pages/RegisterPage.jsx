import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-center text-2xl">Register</h1>
        <form>
          <input type="text" placeholder="full name" />
          <input type="email" placeholder="youremail@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Submit</button>
          <div>
            <p className="text-gray-500 text-center">
              Already have an account{" "}
              <Link
                to={`/login`}
                className="underline text-black font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

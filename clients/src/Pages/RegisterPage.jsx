import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const details = { name, email, password };

  const registerUser = (e) => {
    e.preventDefault();
    axios.post("/register", details);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="youremail@email.com"
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

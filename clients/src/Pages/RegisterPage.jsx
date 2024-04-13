import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const details = { name, email, password };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", details);
      toast.success(`${response.data.name} your registration was successful`);
      console.log(response.data);
    } catch (error) {
      if (error.response.data.keyPattern.email == 1)
        toast.error("Email already registered");
    }
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

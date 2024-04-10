import React from "react";

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="full name" />
          <input type="email" placeholder="youremail@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Login</h1>
      <form className=" max-w-2xl m-auto ">
        <input type="text" placeholder="youremail@mail.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Submit</button>
      </form>
    </div>
  );
};
export default LoginPage;

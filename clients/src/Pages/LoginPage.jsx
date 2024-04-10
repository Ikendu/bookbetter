const LoginPage = () => {
  return (
    <div className="flex grow items-center  min-h-screen justify-around">
      <div>
        <h1 className="text-center text-2xl">Login</h1>
        <form className=" max-w-2xl m-auto ">
          <input type="text" placeholder="youremail@mail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

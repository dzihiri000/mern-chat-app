const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" p-6 rounded-lg shadow-md w-full max-w-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full py-2 input input-bordered h-10"
              placeholder="Enter username"
            />
          </div>
          <div className="mt-2">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              className="w-full py-2 input input-bordered h-10"
              placeholder="Enter password"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:text-blue-600 hover:underline mt-2 inline-block"
          >
            Don't have an account?
          </a>
          <button className="btn-sm mt-2 btn btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

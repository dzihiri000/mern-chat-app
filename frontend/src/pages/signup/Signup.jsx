import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md w-full max-w-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="John Dou"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="johndou"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter password"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Confirm password"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm mt-4 inline-block hover:text-blue-600 hover:underline"
          >
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

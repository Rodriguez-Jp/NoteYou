function NewPassword() {
  return (
    <>
      <div className="w-4/5 md:w-1/2 lg:w-1/3 mx-auto ">
        <div className="mt-12">
          <h1 className="text-3xl font-light capitalize text-center">
            Change your <span className="font-normal">password</span>
          </h1>
          <form className="mt-10 bg-white p-5 rounded-lg ">
            <label htmlFor="email" className="block font-semibold text-lg">
              Password
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-1 border mt-2 rounded"
              placeholder="Your New Password"
            />
            <label
              htmlFor="password"
              className="block font-semibold text-lg mt-3"
            >
              Confirm your password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-1 border mt-2 rounded"
              placeholder="Confirm Your New Password"
            />
            <input
              type="submit"
              value="Login"
              className="w-full p-2 bg-sky-400 rounded font-bold text-white mt-5 hover:cursor-pointer hover:bg-sky-300 transition-colors"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPassword;

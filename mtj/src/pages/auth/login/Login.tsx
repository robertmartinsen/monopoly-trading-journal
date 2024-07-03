import auth from "@/assets/auth.svg";
import Logo from "@/assets/logo.svg";
import Google from "@/assets/google.svg";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/Button";

export default function LoginPage() {
  return (
    <section className="min-h-screen">
      <div className="flex justify-center xs:mt-5 sm:mt-5 md:mt-20">
        <div className="flex items-center justify-center bg-white shadow-2xl shadow-black xs:w-full sm:w-3/5 md:w-4/5 lg:w-3/6">
          <div className="flex flex-col p-5 md:w-1/2">
            <img src={Logo} alt="" className="size-32" />
            <h1 className="text-2xl font-bold tracking-wide text-primary-100">
              Hello,
            </h1>
            <h2 className="text-4xl font-extrabold text-secondary-300">
              Welcome!
            </h2>
            <form className="bg-gray" action="">
              <div className="mt-5 border">
                <div className="border-l-4 border-primary-100">
                  <div className="ml-4 p-2">
                    <p className="text-black">Email Address</p>
                    <input
                      className="w-full pb-2 pt-2 text-black focus:outline-none"
                      type="text"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>
              </div>
              <div className="border-x border-b">
                <div className="">
                  <div className="ml-4 p-2">
                    <p className="text-black">Password</p>
                    <input
                      className="w-full pb-2 pt-2 text-black focus:outline-none"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
              </div>
              <NavLink to="/resetPassword" className="mt-2 flex justify-end">
                <small className="text-gray">Forgot password?</small>
              </NavLink>
            </form>
            <div className="flex space-x-5 pb-10">
              <div>
                <Button
                  variant="dark"
                  className="border-2 border-primary-100 px-6"
                >
                  Sign in
                </Button>
              </div>
              <div>
                <Button
                  variant="ghost"
                  className="border-2 border-secondary-300 px-3 font-bold text-secondary-300"
                >
                  Create Account
                </Button>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr />
              <p className="text-center text-gray-400">OR</p>
              <hr />
            </div>
            <div className="pb-10">
              <Button className="mt-5 flex w-full items-center justify-center border bg-gray-200 text-sm font-semibold text-black hover:bg-gray-50">
                <img src={Google} className="mr-3 w-8" />
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className="hidden h-full w-1/2 items-center justify-center bg-gradient-to-r from-primary-300 to-primary-200 md:flex">
            <img src={auth} alt="Auth illustration" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

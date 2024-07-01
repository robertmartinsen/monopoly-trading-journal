import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between gap-10 bg-white pb-4 pt-4 lg:gap-20">
      <div className={`ml-4 flex-shrink-0 items-center`}>
        <a href="/">
          <img src={Logo} />
        </a>
      </div>
      <div className="flex">
        <NavLink to="/Login">
          <Button className="mr-3 text-black xs:hidden sm:hidden md:flex lg:flex">
            Sign In
          </Button>
        </NavLink>
        <NavLink to="/SignUpPage">
          <Button
            variant="dark"
            className="mr-4 text-white xs:hidden sm:hidden md:flex lg:flex"
          >
            Create Account
          </Button>
        </NavLink>
        <Button
          size="icon"
          variant="ghost"
          className="ml-3 mr-5 bg-secondary p-2 text-black md:hidden"
        >
          <UserCircleIcon />
        </Button>
      </div>
    </div>
  );
}

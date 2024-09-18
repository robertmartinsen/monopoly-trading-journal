import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { signOut, User } from "firebase/auth";
import { auth } from "@/firebase/firebase";

interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex justify-between gap-10 bg-white pb-4 pt-4 lg:gap-20">
      <div className="ml-4 flex flex-shrink-0 items-center justify-center">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="flex">
        {user ? (
          <Button
            className="mr-3 bg-red-600 text-white xs:hidden sm:hidden md:flex lg:flex"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        ) : (
          <>
            <NavLink to="/login">
              <Button className="mr-3 text-black xs:hidden sm:hidden md:flex lg:flex">
                Sign In
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button
                variant="dark"
                className="mr-4 text-white xs:hidden sm:hidden md:flex lg:flex"
              >
                Create Account
              </Button>
            </NavLink>
          </>
        )}
        <NavLink to="/login">
          <Button
            size="icon"
            variant="ghost"
            className="ml-3 mr-5 bg-secondary p-2 text-black md:hidden"
          >
            <UserCircleIcon />
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

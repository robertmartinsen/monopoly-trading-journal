import { useState } from "react";

import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/Button";

export function Header() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="lg:gap-20 flex justify-between gap-10 bg-white pb-4 pt-4">
      <div
        className={`ml-4 flex-shrink-0 items-center ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        <a href="/">
          <img src={Logo} />
        </a>
      </div>

      <form
        className={`flex-grow justify-center gap-4 md:flex ${showFullWidthSearch ? "flex" : "hidden"}`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(false)}
          size="icon"
          variant="ghost"
          className="mt-1 rounded-r-full bg-secondary text-black md:hidden"
        >
          <ChevronLeftIcon className="" />
        </Button>
        <div className="flex max-w-[600px] flex-grow">
          <input
            type="search"
            placeholder="Search stocks, crypto, forex..."
            className="w-full rounded-l-full bg-secondary px-4 py-1 outline-none"
          />
          <Button className="border-1-0 flex-shrink-0 rounded-r-full border bg-secondary px-4 py-2">
            <MagnifyingGlassIcon className="size-7 rounded-full bg-white p-1 text-black transition duration-300 ease-in-out hover:bg-gray-50" />
          </Button>
        </div>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="mr-2 rounded-r-full bg-secondary text-black md:hidden"
        >
          <MagnifyingGlassIcon />
        </Button>
        <Button className="mr-3 text-black xs:hidden sm:hidden md:flex lg:flex">Sign In</Button>
        <Button variant="dark" className="mr-4 text-white xs:hidden sm:hidden md:flex lg:flex">
          Create Account
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="ml-3 mr-5 bg-secondary text-black md:hidden p-2"
        >
          <UserCircleIcon />
        </Button>
      </div>
    </div>
  );
}

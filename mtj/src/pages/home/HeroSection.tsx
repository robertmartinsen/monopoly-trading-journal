import { Button } from "@/components/Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function HeroSection() {
  return (
    <div className="mr-auto max-w-5xl px-0 pb-24 pt-10 sm:px-6 sm:pb-32 lg:ml-20 lg:flex lg:px-8 lg:py-32 lg:pb-48">
      <div className="mx-auto lg:pt-8">
        <Button className="font-sans p-0.5">About Us →</Button>
        <h1 className="2xl:text-9xl text-light mt-3 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          Keep <span className="text-secondary-100">track</span> of your{" "}
          <span>trades</span> and <span>performance.</span>
        </h1>
        <p className="mt-5">
          At Monopoly Trading Journal, we're on a mission to provide the tools and a journal to
          help traders on their trading journey.
        </p>
        <p className="">Create an account today for FREE.</p>
        <div className="mt-10 flex max-w-full gap-x-6 text-center">
          <Button variant="light" className="font-sans font-bold text-gray-20">
            Create Account
          </Button>
          <a className="inline-flex items-center gap-x-1" href="">
            <div>
              <span className="trucante max-w-full">Sign in</span>
            </div>
            <div className="h-4 w-4">
              <ChevronRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

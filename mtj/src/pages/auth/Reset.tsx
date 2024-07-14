import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button } from "@/components/Button";
import forgot from "@/assets/forgot.svg";
import { NavLink } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      setMessage(null);
    }
  };

  return (
    <section className="min-h-screen">
      <div className="mt-5 flex justify-center md:mt-10">
        <div className="flex w-full max-w-md flex-col bg-white p-5 shadow-2xl shadow-black">
          <h1 className="mb-4 text-center text-2xl font-bold tracking-wide text-primary-100">
            <div>
              <img src={forgot} />
            </div>
            Forgot Password
          </h1>
          <p className="text-center text-gray-800">
            Forgot your password? <span className="font-bold">Don't worry</span>
            .
          </p>
          <p className="pt-2 text-center text-gray-800">
            Type your email address and we'll' send you a link to reset your
            password.
          </p>
          <hr className="mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4 mt-5">
              <label
                className="mb-2 block font-bold text-black"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                className="w-full rounded border border-gray-300 p-2 text-black focus:outline-none"
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" variant="dark" className="w-full py-2">
              Reset Password
            </Button>
          </form>
          {message && <p className="text-red-600 mt-4">{message}</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <div className="flex justify-center mt-10">
          <NavLink
            className="inline-flex items-center gap-x-1 text-gray-700 hover:text-black"
            to="/login"
          >
            <div className="h-4 w-4">
              <ChevronLeftIcon />
            </div>
            <div>
              <span className="trucante max-w-full">Back to Login</span>
            </div>
          </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

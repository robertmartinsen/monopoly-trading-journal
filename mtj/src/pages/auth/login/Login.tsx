import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authImg from "@/assets/auth.svg";
import Logo from "@/assets/logo.svg";
import Google from "@/assets/google.svg";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/Button";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.ts";
import { validateEmail, validatePassword } from "@/utils/validation.ts";

export default function LoginPage() {
  const [focusedInput, setFocusedInput] = useState<string>("email");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFocus = (input: string) => {
    setFocusedInput(input);
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (emailValidationError || passwordValidationError) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error: any) {
      switch (error.code) {
        case "auth/user-not-found":
          setError("Email is not registered");
          break;
        case "auth/wrong-password":
          setError("Password is incorrect");
          break;
        case "auth/invalid-email":
          setError("Invalid email address");
          break;
        default:
          setError("Invalid email or password");
      }
    }
  };

  return (
    <section className="min-h-screen">
      <div className="flex justify-center xs:mt-5 sm:mt-5 md:mt-20">
        <div className="flex items-center justify-center bg-white shadow-2xl shadow-black xs:w-full sm:w-3/5 md:w-4/5 lg:w-3/6">
          <div className="flex flex-col p-5 md:w-1/2">
            <img src={Logo} className="size-32" />
            <h1 className="text-2xl font-bold tracking-wide text-primary-100">
              Hello,
            </h1>
            <h2 className="text-4xl font-extrabold text-secondary-300">
              Welcome!
            </h2>
            <form className="bg-gray" onSubmit={handleLogin}>
              <div className="mt-5 border">
                <div
                  className={`${focusedInput === "email" ? "border-l-4 border-primary-100" : ""}`}
                >
                  <div className="ml-4 p-2">
                    <p className="text-black">Email Address</p>
                    <input
                      className="w-full pb-2 pt-2 text-black focus:outline-none"
                      type="text"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => handleFocus("email")}
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                </div>
              </div>
              <div className="border-x border-b">
                <div
                  className={`${focusedInput === "password" ? "border-l-4 border-primary-100" : ""}`}
                >
                  <div className="ml-4 p-2">
                    <p className="text-black">Password</p>
                    <input
                      className="w-full pb-2 pt-2 text-black focus:outline-none"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => handleFocus("password")}
                    />
                    {passwordError && (
                      <p className="text-red-500">{passwordError} </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <Button className="text-xs text-red-600">
                  <NavLink to="/resetPassword">Forgot password? </NavLink>
                </Button>
              </div>

              {error && <p className="text-red-500">{error}</p>}
              <div className="mt-4 flex space-x-5 pb-10">
                <Button
                  variant="dark"
                  className="border-2 border-primary-100 px-6"
                  type="submit"
                >
                  Sign in
                </Button>
                <NavLink to="/signup">
                  <Button
                    variant="ghost"
                    className="border-2 border-secondary-300 px-3 font-bold text-secondary-300"
                  >
                    Create Account
                  </Button>
                </NavLink>
              </div>
            </form>
            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr />
              <p className="text-center text-gray-400">OR</p>
              <hr />
            </div>
            <div className="pb-10">
              <Button
                onClick={handleGoogleSignIn}
                className="mt-5 flex w-full items-center justify-center border bg-gray-200 text-sm font-semibold text-black hover:bg-gray-50"
              >
                <img src={Google} className="mr-3 w-8" />
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className="hidden h-full w-1/2 items-center justify-center bg-gradient-to-r from-primary-300 to-primary-200 md:flex">
            <img src={authImg} alt="Auth illustration" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

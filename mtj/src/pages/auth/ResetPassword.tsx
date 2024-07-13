import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Button } from "@/components/Button";

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
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-md flex-col bg-white p-5 shadow-2xl shadow-black">
        <h1 className="mb-4 text-2xl font-bold tracking-wide text-primary-100">
          Forgot Password
        </h1>
        <form onSubmit={handlePasswordReset}>
          <div className="mb-4">
            <label className="mb-2 block text-black" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              className="w-full rounded border border-gray-300 p-2"
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
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
}

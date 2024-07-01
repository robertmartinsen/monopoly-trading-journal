import auth from "@/assets/auth.jpg";
import Logo from "@/assets/logo.svg";

export default function LoginPage() {
  return (
    <section className="min-h-screen items-center justify-center bg-white">
      <div className="justify-space-between flex">
        <div className="w-1/2">
          <img src={Logo} alt="" />
          <h1>Hello,</h1>
          <h2>Welcome!</h2>
          <form action="">
            <input type="text" />
          </form>
        </div>
        <div className="w-1/2">
          <img src={auth} alt="Auth illustration" className="h-20 w-full" />
        </div>
      </div>
    </section>
  );
}

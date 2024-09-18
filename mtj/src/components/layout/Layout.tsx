import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Nav } from "@/components/layout/Navigation";
import { User } from "firebase/auth";

interface LayoutProps {
  user: User | null;
}

export const Layout: React.FC<LayoutProps> = ({ user }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <div className="flex flex-grow">
        {user && <Nav />}
        <main className="flex-grow p-4">
          <Outlet />
        </main>
      </div>
      <footer className="bg-white p-4 text-center">Footer Content</footer>
    </div>
  );
};

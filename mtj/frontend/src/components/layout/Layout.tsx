import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Nav } from "@/components/layout/Navigation";

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="grid flex-grow grid-cols-[auto,1fr] overflow-auto">
        <Nav />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <footer className="bg-white p-4 text-center">
        {/* Footer content here */}
        Footer Content
      </footer>
    </div>
  );
};

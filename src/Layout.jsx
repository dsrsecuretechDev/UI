import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="bg-slate-100 w-full min-h-screen flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

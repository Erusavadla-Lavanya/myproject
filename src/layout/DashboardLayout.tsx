
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/header/Header";
import Sidebar from "./../components/sidebar/Sidebar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-60" : "ml-16"
        }`}
      >
        <Header />

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

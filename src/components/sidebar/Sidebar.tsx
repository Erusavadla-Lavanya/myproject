import React from "react";
import {
  LayoutDashboard,
  Settings,
  CircleChevronLeft,
  CircleChevronRight,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./../../hook/hooks";
import { logout } from "../../slice/authSlice";

const HEADER_HEIGHT = "0rem";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <aside
      className={`fixed left-0 top-0 bg-gray-100 text-black
      transition-all duration-300 z-40
      ${isOpen ? "w-60 p-4" : "w-16 p-2"}`}
      style={{
        height: `calc(100vh - ${HEADER_HEIGHT})`,
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          {isOpen && <h1 className="text-lg font-bold">My App</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-200"
          >
            {isOpen ? <CircleChevronRight /> : <CircleChevronLeft />}
          </button>
        </div>
        <nav className="flex flex-col gap-3">
          <div
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-200"
          >
            <LayoutDashboard size={20} />
            {isOpen && <span>Dashboard</span>}
          </div>

          <div
            onClick={() => navigate("/Settings")}
            className="flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-200"
          >
            <Settings size={20} />
            {isOpen && <span>Settings</span>}
          </div>
        </nav>
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 p-2 mt-auto rounded cursor-pointer
          hover:bg-gray-200 text-red-600"
        >
          <LogOut size={18} />
          {isOpen && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

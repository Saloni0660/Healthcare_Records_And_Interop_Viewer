import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Clock3,
  Link2,
  FileText,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Patient Records",
      icon: <Users size={20} />,
      path: "/dashboard/records",
    },
    {
      title: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/dashboard/analytics",
    },
    {
      title: "Timeline",
      icon: <Clock3 size={20} />,
      path: "/dashboard/timeline",
    },
    {
      title: "Summary",
      icon: <FileText size={20} />,
      path: "/dashboard/summary",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="h-20 px-6 flex items-center border-b border-slate-700">
        <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-2xl">
          ❤️
        </div>

        <div className="ml-3">
          <h2 className="font-bold text-xl">NexaCure</h2>
          <p className="text-xs text-slate-400">
            Healthcare Platform
          </p>
        </div>
      </div>

      {/* User */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center font-bold text-lg">
            SG
          </div>

          <div>
            <h3 className="font-semibold">Saloni Goyal</h3>
            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="text-xs uppercase text-slate-500 px-3 mb-4">
          Main Menu
        </p>

        {menu.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-teal-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-5 border-t border-slate-700">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300"
        >
          <LogOut size={20} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}
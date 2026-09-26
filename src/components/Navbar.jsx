import { Bell, Search, Settings } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const { role } = useApp();

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-slate-200 z-40">
      <div className="h-full flex items-center justify-between px-8 ml-72">

        {/* Left */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            NexaCure
          </h1>
          <p className="text-sm text-slate-500">
            Redefining Connected Healthcare
          </p>
        </div>

        {/* Center Search */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-[420px]">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search patients, reports..."
            className="bg-transparent ml-3 w-full outline-none text-sm"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200">
            <Bell size={20} />
          </button>

          <button className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200">
            <Settings size={20} />
          </button>

          <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-3 py-2">
            <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
              SG
            </div>

            <div className="hidden md:block">
              <h3 className="font-semibold text-sm">
                Saloni Goyal
              </h3>
              <p className="text-xs text-slate-500">{role}</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
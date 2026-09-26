import { Search } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useApp();

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
          <Search className="text-teal-600" size={20} />
        </div>

        <div className="flex-1">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search patient records, medications, observations..."
            className="w-full outline-none text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>
    </div>
  );
}
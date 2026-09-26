import { Filter, RotateCcw } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function FilterPanel() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    recordType,
    setRecordType,
    provider,
    setProvider,
    clearFilters,
  } = useApp();

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Filter className="text-teal-600" size={20} />
          <h3 className="font-bold text-lg">Advanced Filters</h3>
        </div>

        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-slate-500 hover:text-red-500"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <div>
          <label className="text-sm text-slate-500">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">
            End Date
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          />
        </div>

        <div>
          <label className="text-sm text-slate-500">
            Record Type
          </label>

          <select
            value={recordType}
            onChange={(e) => setRecordType(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>Encounter</option>
            <option>Observation</option>
            <option>Medication</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-slate-500">
            Provider
          </label>

          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full mt-2 border rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>Dr. Sharma</option>
            <option>Dr. Mehta</option>
            <option>Dr. Singh</option>
          </select>
        </div>

      </div>
    </div>
  );
}
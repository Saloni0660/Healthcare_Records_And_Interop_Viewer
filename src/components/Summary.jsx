import { Printer, ShieldCheck } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Summary() {
  const { healthcareData } = useApp();
  const p = healthcareData.patient;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-700 to-cyan-600 rounded-[28px] p-8 text-white flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">
            Patient Summary Report
          </h1>
          <p className="text-cyan-100 mt-2">
            Digital Clinical Overview
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="bg-white text-teal-700 px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
        >
          <Printer size={18} />
          Print
        </button>
      </div>

      {/* Patient Info */}
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-teal-600" />
          <h2 className="text-2xl font-bold">
            Patient Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Info title="Patient Name" value={p.name} />
          <Info title="Patient ID" value={p.id} />
          <Info title="Age" value={`${p.age} Years`} />
          <Info title="Gender" value={p.gender} />
          <Info title="Blood Group" value={p.bloodGroup} />
          <Info title="Phone" value={p.phone} />
          <Info title="Status" value="Active" />
          <Info title="Hospital" value="NexaCure Medical Center" />
        </div>
      </div>

      {/* Clinical Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="Clinical Visits"
          value={healthcareData.encounters.length}
          color="text-blue-700"
          bg="bg-blue-50"
        />

        <Card
          title="Lab Reports"
          value={healthcareData.observations.length}
          color="text-green-700"
          bg="bg-green-50"
        />

        <Card
          title="Medications"
          value={healthcareData.medications.length}
          color="text-purple-700"
          bg="bg-purple-50"
        />
      </div>

      {/* Doctor Notes */}
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <h2 className="text-2xl font-bold mb-5">
          Clinical Notes
        </h2>

        <div className="space-y-4 text-slate-600 leading-7">
          <p>
            • Patient is in stable condition with normal vital observations.
          </p>

          <p>
            • Blood glucose levels remain within the recommended range.
          </p>

          <p>
            • Continue prescribed medication and routine follow-up after 30 days.
          </p>

          <p>
            • No critical allergies or emergency observations reported.
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">
      <p className="text-xs uppercase tracking-wide text-slate-400">
        {title}
      </p>

      <h3 className="font-bold text-lg mt-2">
        {value}
      </h3>
    </div>
  );
}

function Card({ title, value, color, bg }) {
  return (
    <div className={`${bg} rounded-3xl p-6 text-center`}>
      <h2 className={`text-4xl font-bold ${color}`}>
        {value}
      </h2>

      <p className="text-slate-500 mt-2">
        {title}
      </p>
    </div>
  );
}
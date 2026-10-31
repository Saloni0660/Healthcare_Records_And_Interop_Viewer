import { ShieldCheck } from "lucide-react";

export default function PrintSummary({ healthcareData, role }) {
  const patient = healthcareData.patient;

  return (
    <div id="patient-summary" className="space-y-6">

      <section className="bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-5">
          <ShieldCheck className="text-teal-600" />
          <h2 className="text-xl font-bold">
            Patient Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Info title="Patient Name" value={patient.name} />
          <Info title="Patient ID" value={patient.id} />
          <Info title="Age" value={`${patient.age} Years`} />
          <Info title="Gender" value={patient.gender} />
          <Info title="Blood Group" value={patient.bloodGroup} />
          <Info title="Phone" value={patient.phone} />

        </div>

      </section>

      <section className="grid md:grid-cols-3 gap-5">

        <Card
          title="Clinical Visits"
          value={healthcareData.encounters.length}
        />

        <Card
          title="Lab Reports"
          value={healthcareData.observations.length}
        />

        <Card
          title="Medications"
          value={healthcareData.medications.length}
        />

      </section>

      <section className="bg-white border rounded-2xl p-6">

        <h2 className="text-xl font-bold mb-5">
          Clinical Visit History
        </h2>

        {healthcareData.encounters.map((item) => (
          <div
            key={item.id}
            className="border-b py-4 flex justify-between gap-4"
          >
            <div>
              <p className="font-semibold">{item.type}</p>
              <p className="text-sm text-slate-500">
                {item.provider}
              </p>
            </div>

            <p className="text-sm text-slate-500">
              {item.date}
            </p>
          </div>
        ))}

      </section>

      <p className="text-sm text-slate-500">
        Viewing Role: {role}
      </p>

      <p className="bg-amber-50 text-amber-900 p-4 rounded-xl text-sm">
        This report contains synthetic academic demonstration data
        and is not intended for medical diagnosis or treatment.
      </p>

    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="font-semibold mt-2">
        {value || "Not Available"}
      </p>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-teal-50 text-teal-800 p-5 rounded-xl text-center">
      <h2 className="text-3xl font-bold">{value}</h2>
      <p className="mt-2">{title}</p>
    </div>
  );
}
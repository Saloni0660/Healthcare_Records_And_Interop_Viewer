import React, { useState } from "react";
import healthcareData from "../data/healthcareData.json";
import Interop from "./Interop";

const InteroperabilityViewer = () => {
  const [filter, setFilter] = useState("All");

  const patient = healthcareData.patient;
  const records = healthcareData.entry;

  const categories = [
    "All",
    "Encounter",
    "Observation",
    "MedicationStatement",
    "Condition"
  ];

  return (
    <div style={{
      padding: "24px",
      background: "#f1f5f9",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto"
      }}>
        <h1 style={{ color: "#1e3a5f", marginBottom: "6px" }}>
          Healthcare Records & Interoperability Viewer
        </h1>

        <p style={{ color: "#64748b", marginBottom: "24px" }}>
          FHIR-inspired structured patient records
        </p>

        <div style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "24px",
          borderLeft: "5px solid #2563eb"
        }}>
          <h2 style={{ marginTop: 0, color: "#1e3a5f" }}>
            Patient Information
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "18px"
          }}>
            {Object.entries(patient).map(([key, value]) => (
              <div key={key}>
                <div style={{
                  color: "#64748b",
                  fontSize: "13px",
                  textTransform: "capitalize"
                }}>
                  {key}
                </div>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "16px"
        }}>
          <h2 style={{ color: "#1e3a5f", margin: 0 }}>
            Interoperability Records
          </h2>

          <span style={{
            background: "#dbeafe",
            color: "#1d4ed8",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "13px"
          }}>
            {records.length} Records
          </span>
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px"
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category === "All" ? "All" : category)}
              style={{
                padding: "9px 14px",
                borderRadius: "7px",
                border: "1px solid #cbd5e1",
                cursor: "pointer",
                background: filter === category ? "#1e3a5f" : "#ffffff",
                color: filter === category ? "#ffffff" : "#334155"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <Interop
          records={records}
          filter={filter === "All" ? "" : filter}
        />

        <p style={{
          textAlign: "center",
          color: "#64748b",
          fontSize: "12px",
          marginTop: "24px"
        }}>
          Academic Demo • Synthetic Patient Data • FHIR-inspired JSON Bundle
        </p>
      </div>
    </div>
  );
};

export default InteroperabilityViewer;

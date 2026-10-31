import React from "react";

const RecordSegment = ({ resource }) => {
  if (!resource) return null;

  const fields = Object.entries(resource).filter(
    ([key]) => key !== "resourceType" && key !== "id"
  );

  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "14px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.04)"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px",
        flexWrap: "wrap",
        gap: "8px"
      }}>
        <h3 style={{ margin: 0, color: "#1e3a5f", fontSize: "17px" }}>
          {resource.type || resource.medication ||
           resource.condition || resource.resourceType}
        </h3>

        <span style={{
          background: "#e0f2fe",
          color: "#0369a1",
          padding: "5px 10px",
          borderRadius: "20px",
          fontSize: "12px"
        }}>
          {resource.resourceType}
        </span>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "12px"
      }}>
        {fields.map(([key, value]) => (
          <div key={key}>
            <div style={{
              color: "#64748b",
              fontSize: "12px",
              textTransform: "capitalize",
              marginBottom: "4px"
            }}>
              {key.replace(/([A-Z])/g, " $1")}
            </div>
            <div style={{
              color: "#1e293b",
              fontSize: "14px",
              fontWeight: "500",
              wordBreak: "break-word"
            }}>
              {String(value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordSegment;

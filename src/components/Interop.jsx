import React from "react";
import RecordSegment from "./RecordSegment";

const Interop = ({ records, filter }) => {
  const filteredRecords = records.filter((item) => {
    const resource = item.resource;
    return !filter || resource.resourceType === filter;
  });

  if (filteredRecords.length === 0) {
    return (
      <p style={{ color: "#64748b", padding: "20px" }}>
        No records found for this category.
      </p>
    );
  }

  return (
    <div>
      {filteredRecords.map((item) => (
        <RecordSegment
          key={item.resource.id}
          resource={item.resource}
        />
      ))}
    </div>
  );
};

export default Interop;

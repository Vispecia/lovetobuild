import React from "react";
import "../css/card.css";
function Card({ value, children }) {
  return (
    <div className="card">
      {children && (
        <div style={{ marginLeft: "4px", marginTop: "4px" }}>{children}</div>
      )}
      <h3>{value.type}</h3>
      <p>{value.text}</p>
    </div>
  );
}

export default Card;

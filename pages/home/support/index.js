import React from "react";
import SupportItem from "../../../components/supportCenter/supportItem";

const SupportCenter = () => {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <h1>
        <span>Support</span>
        <span>Center</span>
        </h1>
        <SupportItem />
    </div>
  );
};

export default SupportCenter;

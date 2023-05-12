import React from "react";
import Support from "../../../components/home/supportCenter/Support";

const SupportCenter = () => {
  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <div className="container">
        <div className="main-container__description">
          <div className="left">
            <h1>
              <span>Support</span>
              <span>Center</span>
            </h1>
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
};

export default SupportCenter;

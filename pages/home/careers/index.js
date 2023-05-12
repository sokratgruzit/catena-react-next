import React from "react";

import { Button } from "@catena-network/catena-ui-module";

const Careers = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Careers</h1>
      <Button
        label={"Add Career"}
        size={"btn-lg"}
        type={"btn-primary"}
        arrow={"arrow-none"}
        element={"button"}
        disabled={false}
        onClick={() => console.log("hi")}
      />
    </div>
  );
};

export default Careers;

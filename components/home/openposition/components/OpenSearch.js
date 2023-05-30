import { Input } from "@catena-network/catena-ui-module";
import React from "react";

const OpenSearch = ({ title, department, location }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="open-positions__filter-container">
        <div className="open-positions__filter">
          <div className="open-positions__filter-ttl">{department}</div>
          <div className="open-positions__select-ttl">
            <Input
              type={"lable-input-select"}
              icon={false}
              selectType={"country"}
              selectLabel={"All"}
              status={"warning"}
              title={"your text"}
              color={"#FFA726"}
              customStyles={{ width: "320px" }}
            />
          </div>
        </div>
        <div className="open-positions__filter">
          <div className="open-positions__filter-ttl">{location}</div>
          <Input
            type={"lable-input-select"}
            icon={false}
            selectType={"country"}
            selectLabel={"All"}
            status={"warning"}
            title={"your text"}
            color={"#FFA726"}
            customStyles={{ width: "320px" }}
          />
        </div>
        <div className="open-positions__filter-clear">Clear filter</div>
      </div>
    </div>
  );
};

export default OpenSearch;

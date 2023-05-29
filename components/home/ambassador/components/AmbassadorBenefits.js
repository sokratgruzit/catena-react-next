import React from "react";

const AmbassadorBenefits = props => {
  const { title, ambassadorInfo } = props;
  return (
    <div>
      <h3>{title}</h3>
      {ambassadorInfo.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="ttl">{item.title}</h4>
            <p className="teaser">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AmbassadorBenefits;

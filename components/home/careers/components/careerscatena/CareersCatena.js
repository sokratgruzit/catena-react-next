import Link from "next/link";
import React from "react";

const CareersCatena = () => {
  return (
    <div>
      <h1>
        <span>Careers</span>
        <div className="ttl_row">
          <span>at</span>
          <span className="ttl_red">CATENA</span>
        </div>
      </h1>
      <div className="open-positions__btn-container">
        <Link href={"open-positions"} className="open-positions__btn">
          Open positions
        </Link>
      </div>
    </div>
  );
};

export default CareersCatena;

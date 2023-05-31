import React from "react";

export default function TechnologiesBanner() {
  const bannerData = [
    {
      image: "/images/guideLines/Logo.png",
    },
    {
      title: "Technologies",
      teaser: "Which makes Catena different",
      image: "/images/guideLines/catenaColors.png",
    },
  ];
  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          {item.title && <h1>{item.title}</h1>}
          {item.teaser && <p>{item.teaser}</p>}
          <img src={item.image} alt="image" />
        </div>
      ))}
    </div>
  );
}

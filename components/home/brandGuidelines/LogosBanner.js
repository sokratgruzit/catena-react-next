import React from "react";

export default function LogosBanner() {
  const logosBanner = [
    {
      image: "/images/guideLines/Logo.png",
      title: "Logo",
      texts: [
        "The logo is a clear, bright and clear sign in the form of the letter C with a pronounced center — like the center of the universe.",
        "Combined with the austere font, the logo feels self-contained and austere.",
        "Other acceptable versions of the logo will be presented later.",
      ],
    },
    {
      image: "/images/guideLines/logo.png",
      title: "Brandmark",
      texts: [
        "The logo is a clear, bright and clear sign in the form of the letter C with a pronounced center — like the center of the universe.",
        "Combined with the austere font, the logo feels self-contained and austere.",
        "Other acceptable versions of the logo will be presented later.",
      ],
    },
  ];

  return (
    <div>
      {logosBanner.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt="logo" />
            <div>
              <h2>{item.title}</h2>
              {item.texts &&
                item.texts.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

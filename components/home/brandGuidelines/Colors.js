import React from "react";

export default function Colors() {
  const colors = [
    {
      teaser: "Catena Red",
      hex: "FF7152",
      rgb: [, "R=255", "G=113", "B=82"],
      cmyk: ["C=1", "M=69", "Y=74", "K=0"],
    },
    {
      teaser: "Black",
      hex: "000000",
      rgb: [, "R=0", "G=0", "B=0"],
      cmyk: ["C=58", "M=46", "Y=41", "K=95"],
    },
    {
      teaser: "White",
      hex: "FFFFFF",
      rgb: [, "R=255", "G=255", "B=255"],
      cmyk: ["C=0", "M=0", "Y=0", "K=0"],
    },
    {
      teaser: "Blue",
      hex: "0500FF",
      rgb: [, "R=5", "G=0", "B=255"],
      cmyk: ["C=83", "M=74", "Y=0", "K=0"],
    },
  ];
  return (
    <div>
      {colors.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item.teaser}</h4>
            <p>{item.hex}</p>
            <div>
              {item.rgb.map((rgb, index) => (
                <span key={index}>{rgb} </span>
              ))}
            </div>
            <div>
              {item.cmyk.map((cmyk, index) => (
                <span key={index}>{cmyk} </span>
              ))}
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}

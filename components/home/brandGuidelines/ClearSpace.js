import React from "react";

export default function ClearSpace() {
  const data = [
    {
      title: ["Clear Space", "& Positioning"],
      text: "The logo should always be surrounded by generous white space. The minimum required space around the logo is equivalent to the radius of the symbol.",
    },
    {
      image: "/images/guideLines/Logo.png",
    },
    {
      title: ["Incorrect", "Usage"],
      text: [
        "Listed below are examples of incorrect usage of the",
        "Catena Corporate logo.",
      ],
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {item.title && (
            <div>
              {item.title.map((text, idx) => (
                <span key={idx}>{text} </span>
              ))}
            </div>
          )}
          {item.text && (
            <div>
              {typeof item.text === "string" ? (
                <span>{item.text}</span>
              ) : (
                item.text.map((text, idx) => <span key={idx}>{text} </span>)
              )}
            </div>
          )}
          <img src={item.image} alt="image" />
        </div>
      ))}
    </div>
  );
}

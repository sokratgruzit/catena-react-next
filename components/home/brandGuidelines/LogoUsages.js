import React from "react";

export default function LogoUsages() {
  const data = [
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not change the size relationship of the symbol and the wordmark.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not make the logo a single colour.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not alter the colour of the symbol or the wordmark.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not add effects such as drop shadows, gradients or glow.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not use as a mask or holding shape for imagery.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not place onto backgrounds with insufficient contrast to the logo.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not rotate, skew, or shear.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not distort proportions.",
    },
    {
      image: "/images/guideLines/Logo.png",
      text: "Do not add text closely to the logotype to create another logo.",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="image" />
          <div>
            <span>{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from 'react';

export default function MAinColors() {
  const colors = [
    { colorName: 'CATENA RED', hex: '#E96B6B' },
    { colorName: 'BLUE', hex: '#15ffff' },
    { colorName: 'WHITE', hex: '#00050F' },
    { colorName: 'BLACK', hex: '#00050F' },
  ];
  return (
    <div>
      <h3>Colors</h3>
      <p>
        A colour palette dominated by blue and red, and a wide variety of colours that represent each of our products.
      </p>
      {colors.map((item, index) => {
        return (
          <div key={index}>
            <h6>{item.colorName}</h6>
            <p>{item.hex}</p>
          </div>
        );
      })}
    </div>
  );
}

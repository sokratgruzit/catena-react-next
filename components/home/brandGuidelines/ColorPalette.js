import React from 'react';

export default function ColorPalette() {
  const data = [
    {
      color: '817EFF',
    },
    {
      color: 'D5D5FF',
    },
    {
      color: 'FFBB95',
    },
    {
      color: 'FF8D4D',
    },
    {
      color: 'E2DD5D',
    },
    {
      color: '4ECB6A',
    },
    {
      color: '99FFB0',
    },
    {
      trade: 'FF8E75 → 9F402B',
    },
    {
      trade: '8A88FF → 0500FF',
    },
    {
      trade: 'D5D5FF → 8B8BC6',
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.color}</div>
            <div>{item.trade}</div>
          </div>
        );
      })}
    </div>
  );
}

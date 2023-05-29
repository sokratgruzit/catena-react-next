import React from "react";

export default function Promo() {
  const PROMO = [
    {
      boldText:
        "CORE is a multi-chain PoS Network focused on Interoperability, Scalability, and Usability. At its core, it utilizes an AI-enabled Proof of Stake algorithm, a multi-layered consensus model, and voting-based governance.",
      text: [
        "It achieves higher scalability using advanced sharding, pipelining, chunking, and parallel transaction processing.",
        "These technologies enable the CORE network to be infinitely scalable and achieve significantly higher throughput and efficiency. CORE is a true multi-chain communication solution that enables protocols such as cross-chain registries and cross-chain computation.",
      ],
    },
  ];

  return (
    <div>
      <h1>Technology</h1>
      {PROMO.map((item, index) => (
        <div key={index}>
          <p>{item.boldText}</p>
          <ul>
            {item.text.map((textItem, textIndex) => (
              <li key={textIndex}>{textItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

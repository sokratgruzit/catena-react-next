const Roadmap = () => {
  const roadmapData = [
    {
      year: "2021",
      milestones: [
        { title: "Website Launch", quarter: "Q3" },
        { title: "CORE Paper", quarter: "Q3" },
        { title: "Request for Proposals (R1)", quarter: "Q3" },
        { title: "Seed Founders On-Boarding", quarter: "Q3" },
        { title: "CMCX Token Offering", quarter: "Q3" },
        {
          title: "CORE Community Initiatives Program Launch (CCIP)",
          quarter: "Q4",
        },
        { title: "Technical Committee Formation", quarter: "Q4" },
        { title: "Research and Development Team Voting Event", quarter: "Q4" },
        { title: "Request for Proposals (R2)", quarter: "Q4" },
        { title: "Proof of Concept (PoC) Version 0.1", quarter: "Q4" },
        { title: "CMCX Token Exchange Offering (IEO)", quarter: "Q4" },
        { title: "CORE Hackathon 2021", quarter: "Q4" },
      ],
    },
    {
      year: "2022",
      milestones: [
        { title: "CORE MVP", quarter: "Q1" },
        { title: "CORE Gravity", quarter: "Q1" },
        { title: "White-paper update", quarter: "Q1" },
        { title: "Private test-net launch", quarter: "Q2" },
        { title: "Native CORE Wallet", quarter: "Q2" },
        { title: "Origo Layer Testing", quarter: "Q2" },
        { title: "PivotChains Testing", quarter: "Q2" },
        { title: "Public test-net launch", quarter: "Q3" },
        { title: "Catena Layer Testing", quarter: "Q3" },
        { title: "Consensus & Sharding Optimizations", quarter: "Q3" },
        { title: "CORE Universal Explorer", quarter: "Q3" },
        { title: "PolyChains Testing", quarter: "Q3" },
        { title: "Cross-Chain Communication Protocol", quarter: "Q3" },
        { title: "Aura Layer Testing", quarter: "Q3" },
        { title: "Staking launch", quarter: "Q3" },
        { title: "Apeirogon Framework Release", quarter: "Q4" },
        { title: "Development Toolkit", quarter: "Q4" },
        { title: "CORE Hackathon 2022", quarter: "Q4" },
        { title: "CORE VM Beta Release", quarter: "Q4" },
        { title: "Smart Contracts", quarter: "Q4" },
      ],
    },
    {
      year: "2023",
      milestones: [
        { title: "CORE Main-net Launch", quarter: "Q1" },
        { title: "Trustless Bridge", quarter: "Q1" },
        { title: "Voting system", quarter: "Q1" },
        { title: "Storage Sharing Protocol", quarter: "Q1" },
        { title: "Fast State Sync and Re-sharding", quarter: "Q1" },
        { title: "Cryptography Engine", quarter: "Q1" },
        { title: "Consensus Engine", quarter: "Q1" },
        { title: "On-Chain Governance", quarter: "Q2" },
        { title: "IPFS Integration", quarter: "Q2" },
        { title: "Web3.js Integration", quarter: "Q2" },
        { title: "Randomizer Engine", quarter: "Q2" },
        { title: "Universal blockchain Access API", quarter: "Q3" },
        { title: "Off-Chain Data Access (CORE Oracles)", quarter: "Q3" },
        { title: "CORE Global Bridge", quarter: "Q3" },
        { title: "State Engine", quarter: "Q3" },
        { title: "CORE Name Service", quarter: "Q4" },
        { title: "DeFI Tools for Developers", quarter: "Q4" },
        { title: "CORE Hackathon 2023", quarter: "Q4" },
        { title: "Tokenizer Engine", quarter: "Q4" },
      ],
    },
    {
      year: "2024",
      milestones: [
        { title: "CORE OS Beta", quarter: "Q1" },
        { title: "Synthetic Gate", quarter: "Q1" },
        { title: "Cross-Chain Smart Contracts", quarter: "Q1" },
        { title: "Core Mesh testing", quarter: "Q2" },
        { title: "TPPL Public Access", quarter: "Q2" },
        { title: "State Sync Engine", quarter: "Q2" },
        { title: "Blockchain Distribution Network", quarter: "Q2" },
      ],
    },
  ];

  return (
    <div>
      <ul>
        {roadmapData.map(({ year, milestones }) => (
          <li key={year}>
            <div>{year}</div>
            {milestones.map(({ title }) => (
              <div key={title}>{title}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;

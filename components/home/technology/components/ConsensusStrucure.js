import Cart from "./Cart";

export default function ConsensusStrucure() {
  const cartItems = [
    {
      image: "Validators.jpg",
      title: "Validators",
      description:
        "Validators are nodes on the CORE blockchain that validate, process, and attest transactions on the blockchain. Through its democratic consensus mechanism, validators are voted for by community members that have voting rights.",
    },
    {
      image: "Observer.jpg",
      title: "Observer",
      description:
        "Observers add to the decentralization and validation of the chain and are either invited by other members in the chain or are members that believe in the project and want to earn rewards in the native token.",
    },
    {
      image: "Defenders.jpg",
      title: "Defenders",
      description:
        "A node type that attests to the validity of blocks as they are formed and before they are submitted to the chains. A Defender fishes out for any illegal blocks formed by malicious actors on the network, and are rewarded for their work.",
    },
    {
      image: "Nominators.jpg",
      title: "Nominators",
      description:
        "Members who hold tokens on the chain that nominate staking members as validators for transactions. Nominators receive a part of the reward that their nominated validators receive for their work in successfully nominating validators.",
    },
    {
      image: "Collators.jpg",
      title: "Collators",
      description:
        "Collators each supervise a shard of the main chain. They are responsible for the integrity and validity of their shard, and communicate the state of their shard to the main chain.",
    },
    // Add more items as needed
  ];
  return (
    <div>
      <h1>
        <span>Consensus</span>
        <span>Structure</span>
      </h1>
      <Cart items={cartItems} />
    </div>
  );
}

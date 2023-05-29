let faq = [
  {
    id: 1,
    question: "What is CATENA?",
    answer:
      "CATENA is Multi Chain PoS Network focused on Interoperability, Scalability and Usability.\nIt utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance. <br/><br/> It would attain higher level of Scalability using Advanced Sharding along with Pipelining and Chunking and Parallel Transaction Processing.\nThese technologies have made it possible for the CATENA network to be infinitely scalable and to achieve significantly higher throughput and efficiency.\n",
  },
  {
    id: 2,
    question: "Why is CATENA needed?",
    answer:
      "CATENA is a solution to all of the current major blockchain problems, namely usability, scalability, throughput, security, and interoperability. CATENA solves these issues through its combination of an AI controlled consensus protocol, it's blockchain sharding layer, and its simplified cross-chain communication.\n",
  },
  {
    id: 3,
    question: "Who created CATENA?",
    answer:
      "CATENA is community driven and relies on its community members for its continuous development. These members include current and future academics, developers, and engineers present in the CATENA community.\n",
  },
  {
    id: 4,
    question: "How many chains can CATENA connect?\n",
    answer:
      "It is difficult to give a specific limit as to how many chains can be connected to the CATENA network. Currently, all of the major public chains and all CATENA linked chains can be connected to the network. CATENA's optimized and scalable protocol allows for several hundreds, if not thousands, of chain connections to be made to its framework. Future advancements to the protocol may even increase the upper bound on the limit of connected chains as CATENA aims to become the internet of blockchains.\n",
  },
  {
    id: 5,
    question: "How does CATENA plan to solve the scalability issue?\n",
    answer:
      "CATENA is able to increase the throughput speed of current blockchain technology linearly through a combination of sharding, pipelining, and its multilayer technology into one cross-shard and cross-chain communication protocol. The protocol is able to take the large number of transactions from a large ecosystem and split them into smaller ecosystems. These smaller ecosystems are then able to process the transactions in parallel to each other and simultaneously communicate live updates to the other ecosystems. These ecosystems are directly correlated to the size of CATENA's community. So, as the community grows the ecosystems will grow, resulting in faster throughput of larger volumes.\n",
  },
  {
    id: 6,
    question: "Will you make the source code public?\n",
    answer:
      "Of course! We can't be a community driven project without making our project open source. Besides that, we believe that there is power in numbers, and that it would benefit the CATENA project by not only building a project that incorporates our community's ideology but that also utilizes the exciting intellectual power and skillsets that our community has to offer.\n",
  },
  {
    id: 7,
    question: "How can I join the community?\n",
    answer:
      "CATENA is open source and community centric. We welcome new community members with open arms. Whether it is just to keep up to date with CATENA's exciting progress or to contribute to its online platforms, we'd love to hear from you and have you be a part of our growing community!\n",
  },
  {
    id: 8,
    question: "How can I support CATENA?\n",
    answer:
      "There are many ways that you can support the CATENA project such as join our Ambassador program, host CATENA-related events in your community, or become a part of our online community. Join us on all social media platforms!",
  },
];

function FaqItem() {
  return (
    <>
      <div className="body-container">
        <div className="container">
          <div className="blog">
            <h1>Faq</h1>
            <p className="faq__teaser">Answers to frequently asked questions about the CATENA Network.</p>
            <div className="faq__list"></div>
          </div>
        </div>
      </div>
      <div>
        {faq?.map(item => {
          return (
            <div key={item.id} className="faq__item">
              <div className="faq__item-title">{item.question}</div>
              <div className="faq__item-tease">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FaqItem;

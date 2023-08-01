import styles from './AQ.module.css';

let faq = [
  {
    id: 1,
    image: '/images/number/one.png',
    question: 'What is CORE?',
    answer:
      'CATENA is Multi Chain PoS Network focused on Interoperability, Scalability and Usability. It utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance.It would attain higher level of Scalability using Advanced Sharding along with Pipelining and Chunking and Parallel Transaction Processing. These technologies have made it possible for the CATENA network to be infinitely scalable and to achieve significantly higher throughput and efficiency.',
  },
  {
    id: 2,
    image: '/images/number/two.png',
    question: 'Why is CATENA needed?',
    answer:
      "CATENA is a solution to all of the current major blockchain problems, namely usability, scalability, throughput, security, and interoperability. CATENA solves these issues through its combination of an AI controlled consensus protocol, it's blockchain sharding layer, and its simplified cross-chain communication.\n",
  },
  {
    id: 3,
    image: '/images/number/Three.png',
    question: 'Who created CATENA?',
    answer:
      'CATENA is community driven and relies on its community members for its continuous development. These members include current and future academics, developers, and engineers present in the CATENA community.\n',
  },
  {
    id: 4,
    image: '/images/number/four.png',
    question: 'How many chains can CATENA connect?\n',
    answer:
      "It is difficult to give a specific limit as to how many chains can be connected to the CATENA network. Currently, all of the major public chains and all CATENA linked chains can be connected to the network. CATENA's optimized and scalable protocol allows for several hundreds, if not thousands, of chain connections to be made to its framework. Future advancements to the protocol may even increase the upper bound on the limit of connected chains as CATENA aims to become the internet of blockchains.\n",
  },
  {
    id: 5,
    image: '/images/number/five.png',
    question: 'How does CATENA plan to solve the scalability issue?\n',
    answer:
      "CATENA is able to increase the throughput speed of current blockchain technology linearly through a combination of sharding, pipelining, and its multilayer technology into one cross-shard and cross-chain communication protocol. The protocol is able to take the large number of transactions from a large ecosystem and split them into smaller ecosystems. These smaller ecosystems are then able to process the transactions in parallel to each other and simultaneously communicate live updates to the other ecosystems. These ecosystems are directly correlated to the size of CATENA's community. So, as the community grows the ecosystems will grow, resulting in faster throughput of larger volumes.\n",
  },
  {
    id: 6,
    image: '/images/number/six.png',
    question: 'Will you make the source code public?\n',
    answer:
      "Of course! We can't be a community driven project without making our project open source. Besides that, we believe that there is power in numbers, and that it would benefit the CATENA project by not only building a project that incorporates our community's ideology but that also utilizes the exciting intellectual power and skillsets that our community has to offer.\n",
  },
  {
    id: 7,
    image: '/images/number/seven.png',
    question: 'How can I join the community?\n',
    answer:
      "CATENA is open source and community centric. We welcome new community members with open arms. Whether it is just to keep up to date with CATENA's exciting progress or to contribute to its online platforms, we'd love to hear from you and have you be a part of our growing community!\n",
  },
  {
    id: 8,
    image: '/images/number/eight.png',
    question: 'How can I support CATENA?\n',
    answer:
      'There are many ways that you can support the CATENA project such as join our Ambassador program, host CATENA-related events in your community, or become a part of our online community. Join us on all social media platforms!',
  },
];

function FaqItem() {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.bodyContainer}>
        <div className={` font-90 ttl`}>A&Q</div>
        <p className={styles.Title}>Answers to frequently asked questions about the CATENA Network.</p>
      </div>
      <div className={`${styles.containerTwo}`}>
        {faq?.map(item => {
          console;
          return (
            <div key={item.id} className={styles.maneBox}>
              <div className={styles.numberBox}>
                <img src={item.image} className={styles.number} />
                <div className={`${styles.itemTitle} ttl  font-40 `}>{item.question}</div>
              </div>
              <div className={`${styles.itemTease} `}>{item.answer}`</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaqItem;

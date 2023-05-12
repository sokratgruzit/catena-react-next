import FaqItem from "../../../components/faq/FAQ";

function Faq() {
  return (
    <div className="container">
      <FaqItem
        title={"What is CORE?"}
        text={`CORE is Multi Chain PoS Network focused on Interoperability,
          Scalability and Usability. It utilizes AI Enabled Proof of Stake
          Algorithm, Multi Layered Consensus Model and Voting Based Governance.`}
        secondText={`It would attain higher level of Scalability using Advanced Sharding
          along with Pipelining and Chunking and Parallel Transaction
          Processing. These technologies have made it possible for the CORE
          network to be infinitely scalable and to achieve significantly higher
          throughput and efficiency.`}
      />
      <FaqItem
        title={"What is CORE?"}
        text={`CORE is Multi Chain PoS Network focused on Interoperability,
          Scalability and Usability. It utilizes AI Enabled Proof of Stake
          Algorithm, Multi Layered Consensus Model and Voting Based Governance.`}
        secondText={`It would attain higher level of Scalability using Advanced Sharding
          along with Pipelining and Chunking and Parallel Transaction
          Processing. These technologies have made it possible for the CORE
          network to be infinitely scalable and to achieve significantly higher
          throughput and efficiency.`}
      />
    </div>
  );
}

export default Faq;

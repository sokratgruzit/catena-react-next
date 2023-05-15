let data = [
  {
    title: "Eligibility",
    text: "Any bug that poses a serious vulnerability to the entire network, protocols, implementation, or security, could be eligible for a reward. It is entirely at our discretion to decide whether a bug is serious and significant enough to be eligible.",
  },
];

function BugBountyItem() {
  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i} className="eligibility__container">
            <div className="eligibility_head mb-100">
              <h2 className="font-51">{item.title}</h2>
              <div className="eligibility_description">{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyItem;

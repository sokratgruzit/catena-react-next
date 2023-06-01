// import styles from "./bugBounty.module.css";

function BugBountyNumList({ data }) {
  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <h3 className="eligibility-subtitle">{item.title}</h3>
            <ol className="eligibility_list">
              {item.listItem?.map((item, i) => {
                return (
                  <li key={i} className="eligibility__list-item">
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyNumList;

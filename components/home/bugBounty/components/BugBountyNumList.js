import styles from './bugBounty.module.css';

function BugBountyNumList({ data }) {
  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <p className={styles.listTitle}>{item.title}</p>
            <ol className={styles.eligibilityList}>
              {item.listItem?.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyNumList;

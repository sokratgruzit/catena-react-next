import styles from './BugBounty.module.css';

function BugBountyNumList({ data }) {
  return (
    <div className={styles.numListContainer}>
      {data?.map((item, i) => {
        return (
          <div className="text" key={i}>
            <p className={`${styles.numListTitle} font-40 ttl`}>{item.title}</p>
            <ol>
              {item.listItem?.map((item, i) => {
                return <li className={`font-20 ${styles.numList}`} key={i}>{item}</li>;
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyNumList;

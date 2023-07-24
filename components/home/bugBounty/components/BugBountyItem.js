import styles from './bugBounty.module.css';

function BugBountyItem({ data }) {
  return (
    <div>
      {data?.map((item, i) => {
        return (
          <div key={i} className={styles.eligibilityContainer}>
            <div className={styles.eligibilityHead}>
              <h2 className={styles.h2}>{item.title}</h2>
              <div className={styles.eligibilityDescription}>{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyItem;

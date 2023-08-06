import styles from './BugBounty.module.css';

function BugBountyItem({ data }) {
  return (
    <div className={styles.eligibilityContainer}>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <div className={styles.eligibilityHead}>
              <h2 className={`ttl font-40`}>{item.title}</h2>
              <div className={styles.eligibilitytext}>{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyItem;

import styles from './BugBounty.module.css';

function BugBountyItem({ data, animate }) {
  return (
    <div className={styles.eligibilityContainer} data-aos='fade-up'>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <div className={styles.eligibilityHead}>
              <h2 className={`ttl font-40 delay2 tYAnimation ${animate ? 'animate' : ''}`}>{item.title}</h2>
              <div className={`${styles.eligibilitytext} delay3 tYAnimation ${animate ? 'animate' : ''}`}>{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BugBountyItem;

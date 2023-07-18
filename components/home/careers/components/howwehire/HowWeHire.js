import styles from './HowWeHire.module.css';

const HowWeHire = props => {
  const { hiringProcess, title, description } = props;

  return (
    <div>
      <section className={styles.container}>
        <div className={`${styles['hire__steps-section']}`}>
          <div className={`${styles['hire__steps-head']}`}>
            <h2 className={styles.font__51}>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={`${styles['hire__steps']}`}>
            {hiringProcess.map((item, index) => {
              return (
                <div key={index} className={`${styles['hire__step']}`}>
                  <div className={`${styles.hire__stepsTtl} ${styles['font__51']}`}>{item.number}</div>
                  <div className={`${styles['hire__steps-desc']}`}>{item.title}</div>
                  <div className={`${styles['hire__steps-line']}`}>{item.value}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.hire__stepsLine}></div>
        </div>
      </section>
    </div>
  );
};

export default HowWeHire;

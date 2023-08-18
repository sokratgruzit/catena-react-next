import styles from './HowWeHire.module.css';

const HowWeHire = props => {
  const { hiringProcess, title, description } = props;

  return (
    <div className='container'>
      <div className={`${styles['hire__steps-section']}`}>
        <div className={`${styles['hire__steps-head']}`} data-aos="fade-up">
          <h2 style={{ color: '#162029' }} className='font-40 ttl'>{title}</h2>
          <p className='font-20'>{description}</p>
        </div>

        <div className={`${styles['hire__steps']}`} data-aos="fade-up">
          {hiringProcess.map((item, index) => {
            return (
              <div key={index} className={`${styles['hire__step']}`}>
                <div className={`${styles.hire__stepsTtl} font-40`}>{item.number}</div>
                <div className={`${styles['hire__steps-desc']} font-20`}>{item.title}</div>
                <div className={`${styles['hire__steps-line']}`}>{item.value}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.hire__stepsLine}></div>
      </div>
    </div>
  );
};

export default HowWeHire;

import styles from './Recruitment.module.css';

const Recruitment = props => {
  const { data, title } = props;
  return (
    <div className='container'>
        <h2 className={`${styles.font__51} font-40 ttl`}>{title}</h2>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.careerQualities__subttl}>{item.title}</div>
              <div className={styles.careerQualities__text}>{item.value}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Recruitment;

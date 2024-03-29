import styles from './CatenaTeam.module.css';

const CatenaTeam = props => {
  const { team, title, title2 } = props;

  return (
    <div className='container'>
      <h2 className={`${styles.font__51} font-40 ttl`} data-aos="fade-up">{title}</h2>
      <h2 className={`${styles.font__51} font-40 ttl`} data-aos="fade-up">{title2}</h2>
      {team.map((item, index) => {
        return (
          <div key={index} data-aos="fade-up">
            <div className={styles.careerQualities__subttl}>{item.title}</div>
            <div className={`${styles.careerQualities__text} font-20`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CatenaTeam;

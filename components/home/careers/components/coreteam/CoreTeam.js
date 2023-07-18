import styles from './CoreTeam.module.css';

const CoreTeam = props => {
  const { team, title } = props;

  return (
    <div className={`${styles.container} ${styles.careerQualities}`}>
      <h2 className={styles.font__51}>{title}</h2>
      {team.map((item, index) => {
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

export default CoreTeam;

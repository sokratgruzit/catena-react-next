import styles from './CoreTeam.module.css';

const CoreTeam = props => {
  const { team, title, title2 } = props;

  return (
    <div className='container'>
      <h2 className={styles.font__51}>{title}</h2>
      <h2 className={styles.font__51}>{title2}</h2>
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

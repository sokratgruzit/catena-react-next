import styles from './CurrentOpenings.module.css';

const CurrentOpenings = props => {
  const { currentOpeningsList, title } = props;

  return (
    <div className={`${styles.container} ${styles['careerQualities']}`}>
      <h2 className={styles.font__51}>{title}</h2>
      {currentOpeningsList.map((item, index) => {
        return (
          <div className={styles.careerQualities__opening} key={index}>
            <div className={styles.careerQualities__openingTtl}>{item.title}</div>
            {item.list &&
              item.list.map((subitem, subindex) => {
                return (
                  <div className={styles.careerQualities__openingTxt} key={subindex}>
                    {subitem}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default CurrentOpenings;

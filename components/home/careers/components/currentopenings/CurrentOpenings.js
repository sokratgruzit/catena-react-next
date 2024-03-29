import styles from './CurrentOpenings.module.css';

const CurrentOpenings = props => {
  const { currentOpeningsList, title } = props;

  return (
    <div>
      <div className='container_bordered'>
        <h2 className={`${styles.font__51} font-40 ttl`} data-aos="fade-up">{title}</h2>
        <div className='container_bordered-child ' data-aos="fade-up">
          <div className={styles.contSTyle}>
            {currentOpeningsList.map((item, index) => {
              return (
                <div className={styles.careerQualities__opening} key={index}>
                  <div className={styles.careerQualities__openingTtl}>{item.title}</div>
                  {item.list &&
                    item.list.map((subitem, index) => {
                      return (
                        <div key={index} className='text'>
                          <ul>
                            <li style={{ color: '#162029' }}>
                              {subitem}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;

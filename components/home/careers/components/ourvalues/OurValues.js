import styles from './OurValues.module.css';

const OurValues = props => {
  const { iconImages, title, description } = props;
  return (
    <div className={styles.career__valuesOuter}>
      <div className={styles.container}>
        <div className={styles.career_head}>
          <h2 className={styles.font__51}>{title}</h2>
          <div className={styles.career_description}>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.career_items}>
          {iconImages.map((item, index) => {
            return (
              <div className={styles.career_item} key={index}>
                <div key={index} className={styles.item_ttl}>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurValues;

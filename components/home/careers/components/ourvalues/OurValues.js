import styles from './OurValues.module.css';

const OurValues = props => {
  const { iconImages, title, description } = props;
  return (
    <div className='container'>
      {/* <div className='container'> */}
      <div className={styles.career_head} data-aos="fade-up">
        <h2 className={`${styles.font__51} font-40 ttl`}>{title}</h2>
        <div className={styles.career_description}>
          <p>{description}</p>
        </div>
        {/* </div> */}
      </div>
      {/* <div className='container'> */}
      <div className={styles.career_items} data-aos="fade-up">
        {iconImages.map((item, index) => {
          return (
            <div className={styles.career_item} key={index}>
              <div className={styles.mobileSvg}>{item.svg}</div>
              <div className={styles.item_ttl}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;

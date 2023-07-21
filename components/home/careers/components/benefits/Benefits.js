import styles from './Benefits.module.css';

const Benefits = props => {
  const { benefitsArr, title } = props;

  return (
    <section className={styles.container}>
      <div className={styles.career__benefitsSection}>
        <div className={`${styles.benefits_ttl} ${styles.font__51}`}>{title}</div>
        <div className={styles.career__benefitsContainer}>
          <div className={styles.career__benefitCol}>
            {/* <div className={styles.col_img}></div> */}
            <ul className={styles.benefits_list}>
              {benefitsArr.map((item, index) => {
                return (
                  <li className={styles.benefits__listItem} key={index}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

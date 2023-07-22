import styles from './Benefits.module.css';

const Benefits = props => {
  const { benefitsArr, title } = props;

  return (
    <section className='container'>
      <div className={styles.career__benefitsSection}>
        <div className={styles.font__51}>{title}</div>
        <div className={styles.career__benefitsContainer}>
          <div className='text'>
            {/* <div className={styles.col_img}></div> */}
            <ul>
              {benefitsArr.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

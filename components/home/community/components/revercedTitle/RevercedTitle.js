import styles from './RevercedTitle.module.css'

const RevercedTitle = ({ data }) => {
  return (
    <div className={`container_bordered-child ${styles.main}`}>
      <h1 className={`${styles.title}`}>{data.title}</h1>
      <p className={styles.text}>{data.text}</p>
    </div >
  );
};

export default RevercedTitle;

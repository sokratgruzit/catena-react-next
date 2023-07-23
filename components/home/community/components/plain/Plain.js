import styles from './Plain.module.css'

const RevercedTitle = ({ data }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.text}>{data.text}</p>
    </div>
  );
};

export default RevercedTitle;

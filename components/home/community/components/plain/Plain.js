import styles from './Plain.module.css';

const Plain = ({ data }) => {
  return (
    <div className={`container`}>
      <div className={styles.main}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.text}>{data.text}</p>
      </div>
    </div>
  );
};

export default Plain;

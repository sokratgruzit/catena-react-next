import styles from './RevercedTitle.module.css';

const RevercedTitle = ({ data }) => {
  return (
    <div className={`container`}>
      <div className={`container_bordered`}>
        <div className={`container_bordered-child text ${styles.main}`}>
          <h2 className={`font-40 ${styles.title}`}>{data.title}</h2>
          <p className={styles.text}>{data.text}</p>
        </div >
      </div>
    </div>
  );
};

export default RevercedTitle;

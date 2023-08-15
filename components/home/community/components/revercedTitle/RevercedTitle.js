import styles from './RevercedTitle.module.css';

const RevercedTitle = ({ data, animate }) => {
  return (
      <div className={`container_bordered`}>
          <div className={`container_bordered-child text ${styles.main}`} data-aos="fade-up">
              <h2 className={`font-40 ${styles.title} ttl`}>{data.title}</h2>
              <p className={`${styles.text}`}>{data.text}</p>
          </div >
      </div>
  );
};

export default RevercedTitle;

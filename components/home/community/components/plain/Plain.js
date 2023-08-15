import styles from './Plain.module.css';

const Plain = ({ data }) => {
  return (
    <div className={`container`}>
      <div className='pT-140 pB-50' data-aos="fade-up">
        <h3 className={`${styles.title} font-40`} data-aos="fade-up">{data.title}</h3>
        <p className={styles.text} data-aos="fade-up">{data.text}</p>
      </div>
    </div>
  );
};

export default Plain;

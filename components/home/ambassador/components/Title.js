import styles from '../css/Title.module.css';

const Title = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={`${styles.blackTitle} font-90 ttl`}>Become a CATENA </div>
      <div className={`${styles.retTitle} font-90`}> Ambassador</div>
    </div>
  );
};

export default Title;

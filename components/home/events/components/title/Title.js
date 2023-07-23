import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title} style={{ color: '#FF6969' }}>
          Catena{' '}
        </span>
        <span className={styles.title} style={{ color: '#162029' }}>
          Events
        </span>
      </div>
      <div className={styles.text}>
        Braced dissected sheep, kermani halts, boy note. Quis raucous fall gown, euismod creatures spent, uproar
        tidings.
      </div>
    </div>
  );
};

export default Title;

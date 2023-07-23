import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title} style={{ color: '#FF6969' }}>
          Catena{' '}
        </span>
        <span className={styles.title} style={{ color: '#162029' }}>
          Ecosystem
        </span>
      </div>
      <div className={styles.text}>
        A set of in-house or partner services united around one company. The ecosystem can be centered around one area
        of the client's life or penetrate several of them at once.
      </div>
    </div>
  );
};

export default Title;

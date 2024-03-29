import styles from '../css/Title.module.css';

const Title = (props) => {
  return (
    <div className={`${styles.container} container tYAnimation ${props.animate ? 'animate' : ''}`}>
      <div className={`${styles.blackTitle} font-90 ttl`}>Become a CATENA </div>
      <div className={`${styles.retTitle} font-90 ttl`}> Ambassador</div>
    </div>
  );
};

export default Title;

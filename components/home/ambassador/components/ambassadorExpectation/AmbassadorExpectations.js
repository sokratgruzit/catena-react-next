import styles from './AmbassadorExpectation.module.css';

const AmbassadorExpectations = props => {
  const { ambassadorApplication, title, description, name, proposals } = props;

  return (
    <div>
      <h3 className='font-51'>{title}</h3>
      <div className={`${styles.community__horizontalTtl} font-51`}>{name}</div>
      <p className={styles.community__horizontalSubTtl}>{description}</p>
      <ul>
        {ambassadorApplication.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <div className={styles.proposals_text}>{proposals}</div>
    </div>
  );
};

export default AmbassadorExpectations;

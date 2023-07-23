import styles from './CompanyInfo.module.css';

const CompanyInfo = props => {
  const { workflow, title, description, name } = props;

  return (
    <div className='container'>
      <div className={styles.careerHow}>
        <h2 className={styles.workStyle}>{title}</h2>
        <h3 style={{ color: '#162029' }}>{name}</h3>
        <h1>{description}</h1>
        {workflow.map((item, index) => {
          return (
            <p className={styles.resText} style={{ textAlign: 'start' }} key={index}>
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;

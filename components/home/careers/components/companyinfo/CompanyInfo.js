import styles from './CompanyInfo.module.css';

const CompanyInfo = props => {
  const { workflow, title, description, name } = props;

  return (
    <div className='container'>
      <div className={styles.careerHow}>
        <h2 className={`${styles.workStyle} font-40 ttl delay1 tYAnimation ${props.animate ? 'animate' : ''}`}>{title}</h2>
        {/* <h3 style={{ color: '#162029' }}>{name}</h3>
        <h1>{description}</h1> */}
        <div className={`delay2 tYAnimation ${props.animate ? 'animate' : ''}`}>
            {workflow.map((item, index) => {
                return (
                    <p className='font-20' key={index}>
                        {item.title}
                    </p>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

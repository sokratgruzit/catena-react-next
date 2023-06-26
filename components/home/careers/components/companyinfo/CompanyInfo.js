import styles from './CompanyInfo.module.css';

const CompanyInfo = props => {
  const { workflow, title, description, name } = props;

  return (
    <div className={`${styles.careerHow} ${styles.mt100}`}>
      <h2 className='font-51'>{title}</h2>
      <h3>{name}</h3>
      <h1>{description}</h1>
      {workflow.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
};

export default CompanyInfo;

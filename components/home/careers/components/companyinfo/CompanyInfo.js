import { StringToHtml } from '../../../../UI/StringToHtml/StringToHtml';
import styles from './CompanyInfo.module.css';

const CompanyInfo = props => {
  const { workflow, title, description, name, careers } = props;

  return (
    <div className='container'>
      <div className={styles.careerHow}>
        {careers?.map((item, index) => {
          return (
            <div key={index}>
              <h2 className={`${styles.workStyle} font-40 ttl`}>title</h2>
              <StringToHtml data={item.inner_descr["en"]["career.inner_descr"]} />
              <p className='font-20' key={index}></p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;

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
            <StringToHtml data={item.how_we_work["en"]["career.how_we_work"]} />
              {/* <p className='font-20' key={index}></p> */}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;

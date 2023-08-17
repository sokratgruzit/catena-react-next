import { StringToHtml } from '../../../../UI/StringToHtml/StringToHtml';
import styles from './CompanyInfo.module.css';

const CompanyInfo = props => {
  const { workflow, title, description, name, careers } = props;
  console.log(careers, 'blalalallaall');

  return (
    <div className='container'>
      <div className={styles.careerHow}>
        {careers?.map((item, index) => {
          return (
            <div key={index}>
              {/* <h2 className={`${styles.workStyle} font-40 ttl`}>{item.how_we_work["en"]["career.how_we_work"]}</h2> */}
            {/* <StringToHtml data={item.inner_descr["en"]["career.inner_descr"]} /> */}
              <p className='font-20' key={index}></p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CompanyInfo;

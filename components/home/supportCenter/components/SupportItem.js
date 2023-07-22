import Announcements from '../../../svg/Support/Announcements';
import CmcxTkn from '../../../svg/Support/CmcxTkn';
import Academy from '../../../svg/Support/Academy';
import FAQ from '../../../svg/Support/Faq';
import Request from '../../../svg/Support/Reqvest';
import Arrow from '../../../svg/Support/Arrow';

import styles from "./SupportItem.module.css";

const SUPPORTITEMS = [
  {
    svg: <Announcements />,
    title: 'Announcements',
    arrow: <Arrow />,
    description: 'CATENA latest official announcements and notices.',
  },
  {
    svg: <CmcxTkn />,
    title: 'CMCX Token',
    arrow: <Arrow />,
    description: 'The Bridge Between Crypto and Global Finance.',
  },
  {
    svg: <Academy />,
    title: 'Academy',
    arrow: <Arrow />,
    description: 'Get a deeper understanding of the crypto industry and market.',
  },
  {
    svg: <FAQ />,
    title: 'FAQ',
    arrow: <Arrow />,
    description: 'Any issues? Find answers to commonly asked questions.',
  },
  {
    svg: <Request />,
    title: 'Submit a request',
    arrow: <Arrow />,
    description: "Can't find the solution to your problem? Submit a request to support team.",
  },
];

const SupportItem = () => {
  return (
    <div className='container'>
      <h1 className={`${styles.TiTle} ttl font-90`}>Support Center</h1>
      <div className={styles.container}>
        {SUPPORTITEMS.map((item, index) => {
          return (
            <div key={index} className={styles.box}>

              <div>{item.svg} </div>
              <div className={`${styles.boxTwo}`}>

                <div className={styles.boxHover}>
                  <h1 className={`${styles.BoxTitle} font-40`}>{item.title}</h1>
                  <div className={styles.boder}></div>
                </div>

                <div className={styles.aaa}>{item.arrow}</div>
              </div>

              <p className={styles.paragrah}>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SupportItem;

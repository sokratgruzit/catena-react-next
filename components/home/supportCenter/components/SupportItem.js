import Announcements from '../../../svg/Support/Announcements';
import CmcxTkn from '../../../svg/Support/CmcxTkn';
import Academy from '../../../svg/Support/Academy';
import FAQ from '../../../svg/Support/Faq';
import Request from '../../../svg/Support/Reqvest';
import Api from '../../../svg/Support/Api';
import Arrow from '../../../svg/Support/Arrow';
import Link from 'next/link';

import styles from "./SupportItem.module.css";


const SUPPORTITEMS = [
  {
    svg: <Announcements />,
    a: 'Announcements',
    arrow: <Arrow />,
    description: 'CATENA latest official announcements and notices.',
    subLink: "/"
  },
  {
    svg: <CmcxTkn />,
    a: 'CMCX Token',
    arrow: <Arrow />,
    description: 'The Bridge Between Crypto and Global Finance.',
    subLink: "/"
  },
  {
    svg: <Academy />,
    a: 'Academy',
    arrow: <Arrow />,
    description: 'Get a deeper understanding of the crypto industry and market.',
    subLink: "/"
  },
  {
    svg: <FAQ />,
    a: 'FAQ',
    arrow: <Arrow />,
    description: 'Any issues? Find answers to commonly asked questions.',
    subLink: "/faq"
  },
  {
    svg: <Request />,
    a: 'Submit a request',
    arrow: <Arrow />,
    description: "Can't find the solution to your problem? Submit a request to support team.",
    subLink: "/"
  },
  {
    svg: <Api />,
    a: 'API Documentation',
    arrow: <Arrow />,
    description: "All document you need when connecting to AAXby API.",
    subLink: "/"
  },
];

const SupportItem = () => {
  return (
    <div className={`${styles.mane} container`}>
      <h1 className={`${styles.TiTle} ttl font-90`}><span>Support</span>  <span className={styles.span} >Center</span></h1>
      <div className={styles.container}>
        {SUPPORTITEMS.map((item, index) => {
          return (
            <div key={index} className={styles.box}>
              <div>{item.svg} </div>
              <div className={`${styles.boxTwo}`}>
                <div className={styles.boxHover}>
                  <Link href={`/home/${item.subLink}`} key={item.id}>
                    <a className={`${styles.BoxTitle} font-40`} >
                      {item.a}
                      <div className={styles.boder}></div>
                    </a>
                  </Link>
                </div>
                <div className={styles.arrowe}>{item.arrow}</div>
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

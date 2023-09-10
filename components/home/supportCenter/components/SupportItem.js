import Announcements from '../../../svg/Support/Announcements';
import CmcxTkn from '../../../svg/Support/CmcxTkn';
import Academy from '../../../svg/Support/Academy';
import FAQ from '../../../svg/Support/Faq';
import Request from '../../../svg/Support/Reqvest';
import Arrow from '../../../svg/Support/Arrow';
import Link from 'next/link';

import styles from './SupportItem.module.css';
import { useDispatch } from 'react-redux';
import {useEffect, useState} from "react";
import { useSelector } from 'react-redux';

const SUPPORTITEMS = [
  {
    svg: <Announcements />,
    a: 'Announcement',
    arrow: <Arrow />,
    description: 'CATENA latest official announcements and notices.',
    subLink: 'https://coremultichain.medium.com/',
  },
  {
    svg: <CmcxTkn />,
    a: 'CMCX Token',
    arrow: <Arrow />,
    description: 'The Bridge Between Crypto and Global Finance.',
    subLink: 'https://cmcx.io/',
  },
  // {
  //   svg: <Academy />,
  //   a: 'Academy',
  //   arrow: <Arrow />,
  //   description: 'Get a deeper understanding of the crypto industry and market.',
  //   subLink: 'https://coremultichain.com/academy',
  // },
  {
    svg: <FAQ />,
    a: 'FAQ',
    arrow: <Arrow />,
    description: 'Any issues? Find answers to commonly asked questions.',
    subLink: '/overview/faq',
  },
  // {
  //   svg: <Request />,
  //   a: 'Submit a request',
  //   arrow: <Arrow />,
  //   description: "Can't find the solution to your problem? Submit a request to support team.",
  //   subLink: 'https://coremultichain.com/your-voice',
  // },
];

const SupportItem = () => {
  const activeLang = useSelector(state => state.settings.activeLang);
  const dispatch = useDispatch();
  const [pageReady, setPageReady] = useState(false);
  let microSchemes;
  if(window.innerWidth > 1240){
    microSchemes = [
      [1,2,8,9,10,11,12,13,14,22,23,24],
    ];
  }

  if(window.innerWidth < 1240){
    microSchemes = [
      [1,2,4,5,6,7,8,9,10,11,13,14,18,19,20,21,22,23,24],
    ];
  }

  const setScheme = (num) => {
    console.log(num);
    dispatch({
      type: "SET_MICHROSCHEME_ARRAY",
      microschemeArray: microSchemes[num]
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setPageReady(true);
      dispatch({
        type: "SET_MICHROSCHEME_ARRAY",
        microschemeArray: microSchemes[0]
      });
    }, 400);
  },[]);
  return (
    <div className={`${styles.main} container`}>
      <h1 className={`${styles.TiTle} ttl font-90 pT-180 pB-50 tYAnimation ${pageReady ? 'animate' : ''}`}>
        <span>Support</span> <span className={styles.span}>Center</span>
      </h1>
      <div className={`${styles.container} tYAnimation delay1 ${pageReady ? 'animate' : ''}`}>
        {SUPPORTITEMS.map((item, index) => {
          return (
            <div key={index} className={styles.box}>
              <div className={styles.boxSvg}>{item.svg} </div>
              <div className={`${styles.boxTwo}`}>
                <div className={styles.boxHover}>
                  <Link href={`${item.subLink}`} key={item.id} locale={activeLang}>
                    <a className={`${styles.BoxTitle} ttl font-40`}>
                      {item.a}
                      <div className={styles.border}></div>
                    </a>
                  </Link>
                </div>
                <div className={styles.arrow}>{item.arrow}</div>
              </div>
              <p className={styles.paragrah}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportItem;

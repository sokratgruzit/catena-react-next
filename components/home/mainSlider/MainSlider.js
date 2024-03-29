import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../../layout/Footer';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './MainSlider.module.css';
import Image from 'next/image';
import TaskSvg from '../../svg/mainSlider/TaskSvg';
import SolutionSvg from '../../svg/mainSlider/SolutionSvg';
import Link from "next/link";

const MainSlider = ({ trans }) => {
  const [levels, setLevels] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const activeLang = useSelector(state => state.settings.activeLang);
  const [scrollBlocker, setScrollBlocker] = useState(true);
  const dispatch = useDispatch();
  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  let microSchemes = [];
  if (window.innerWidth > 1240) {
    microSchemes = [
      [1, 2, 6, 7, 8, 9, 10, 11, 19, 20, 21, 22, 23, 24],
      [1, 2, 7, 8, 9, 10, 20, 21, 22, 23, 24],
      [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 23, 24],
      [1, 2, 7, 8, 9, 10, 20, 21, 22, 23, 24],
      [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 23, 24],
    ];
  }

  if(window.innerWidth < 1240) {
    microSchemes = [
      [1, 2, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 5, 6, 7, 8, 9, 10, 11, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23, 24],
      [1, 2, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 23, 24],
    ];
  }

  useEffect(() => {
    setActiveSlide(1);
    setTimeout(() => {
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide],
      });
    }, 500);
  }, []);

  // let scrollBlocker = true;
  let slideScrollDown = () => {
    if (activeSlide !== 5 && scrollBlocker) {
      setActiveSlide(0);
      // setLevels(microSchemes[activeSlide])
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide],
      });
      setScrollBlocker(false);
      setTimeout(() => {
        setActiveSlide(activeSlide + 1);
      }, 10);
      setTimeout(() => {
        setScrollBlocker(true);
      }, 1000);
    }
  };

  let slideScrollUp = () => {
    if (activeSlide !== 1 && scrollBlocker) {
      setActiveSlide(0);
      dispatch({
        type: 'SET_MICHROSCHEME_ARRAY',
        microschemeArray: microSchemes[activeSlide - 2],
      });
      setScrollBlocker(false);
      setTimeout(() => {
        setActiveSlide(activeSlide - 1);
      }, 10);
      setTimeout(() => {
        setScrollBlocker(true);
      }, 1000);
    }
  };
  return (
    <>
      {/*${styles.mainSliderActive}*/}
      <ReactScrollWheelHandler upHandler={e => slideScrollUp()} downHandler={e => slideScrollDown()}>
        <div className={`${styles.mainSlider}`}>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 1 ? styles.mainSliderActive : ''}`}>
            {/*<Image src='/images/mainSliderBg.png' width={300} height={300} alt='img' />*/}
            <div className={styles.mainSliderItemDescription}>
              <div className={styles.mainSliderLogo}>
                <div>
                  <svg width='68' height='60' viewBox='0 0 68 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M67.4877 54.5806C65.5373 55.3547 63.4569 56.1287 61.3766 56.7738C59.2916 57.4688 57.1634 58.029 55.0054 58.451C52.7358 58.9843 50.4339 59.3722 48.1141 59.6121C45.5227 59.8829 42.9183 60.0121 40.3127 59.9991C34.8428 60.0232 29.3886 59.4171 24.0596 58.1929C19.5229 57.0828 15.2125 55.2062 11.3173 52.6454C7.88232 50.1481 5.04166 46.9331 2.99573 43.2275C0.943643 39.1447 -0.0824017 34.6298 0.00517014 30.0683C-0.0824017 25.5067 0.943643 20.9919 2.99573 16.909C4.96063 13.1478 7.81621 9.91602 11.3173 7.49112C15.1626 4.81268 19.4872 2.88611 24.0596 1.81458C29.3775 0.527138 34.8395 -0.0798506 40.3127 0.00840657C42.9182 0.00211886 45.5222 0.13131 48.1141 0.395445C50.4339 0.635329 52.7358 1.02317 55.0054 1.55655C57.2158 2.0726 59.2962 2.58865 61.3766 3.23371C63.4569 3.87877 65.4073 4.65285 67.4877 5.42692V19.3602C65.9274 18.4572 64.2371 17.6831 62.4168 16.78C60.5423 15.8294 58.5837 15.0521 56.5657 14.4578C54.2727 13.7186 51.9252 13.1578 49.5444 12.7806C46.704 12.3537 43.8355 12.138 40.9628 12.1356C36.833 12.0301 32.7112 12.5522 28.7405 13.6837C25.9344 14.4818 23.3234 15.843 21.0691 17.6831C19.2634 19.2067 17.8766 21.1597 17.0383 23.3596C16.2616 25.5122 15.8657 27.7819 15.8681 30.0683C15.8482 31.5892 16.023 33.1065 16.3882 34.5837C16.7808 36.0639 17.3482 37.4929 18.0785 38.8411C18.9305 40.1935 19.9824 41.4112 21.1991 42.4534C22.5911 43.649 24.1728 44.608 25.88 45.2917C27.9791 46.1432 30.1563 46.7912 32.3812 47.2269C35.264 47.6637 38.1765 47.8793 41.0928 47.872C43.9655 47.8695 46.8341 47.6539 49.6744 47.2269C52.0643 46.8963 54.416 46.3346 56.6957 45.5497C58.6825 44.9182 60.6354 44.1862 62.5468 43.3565C64.3671 42.4534 65.9274 41.6794 67.6177 40.7763V54.5806H67.4877Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
                <div>
                  <svg width='79' height='58' viewBox='0 0 79 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M55.599 46.7428H23.483L18.022 57.5798H0.72876L30.7643 0.556427H48.0576L78.0931 57.5798H60.7999L55.599 46.7428ZM29.074 35.5187H50.1379L39.736 14.4897L29.074 35.5187Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
                <div>
                  <svg width='66' height='58' viewBox='0 0 66 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M40.5808 12.8127V57.451H25.1079V12.8127H0.66333V0.427536H65.0253V12.8127H40.5808Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
                <div>
                  <svg width='60' height='58' viewBox='0 0 60 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M0.427002 57.451V0.427536H58.6778V12.5547H16.42V21.9726H56.4674V34.0997H16.42V45.1948H59.328V57.3219H0.427002V57.451Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
                <div>
                  <svg width='72' height='58' viewBox='0 0 72 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M54.5005 57.451L15.7534 18.2312V57.451H0.280518V0.427536H17.1837L56.0609 39.7763V0.427536H71.5337V57.451H54.5005Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
                <div>
                  <svg width='78' height='58' viewBox='0 0 78 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M55.5059 46.7428H23.39L17.929 57.5798H0.635742L30.6713 0.556427H47.9645L78.0001 57.5798H60.7069L55.5059 46.7428ZM29.111 35.5187H50.1749L39.773 14.4897L29.111 35.5187Z'
                      fill='#FF6969'
                    />
                  </svg>
                </div>
              </div>
              <h1 className='font-90 ttl'>A Virtual World of Interconnected Blockchains</h1>
              <div className={styles.mainSliderItemBtnOut}>
                <Link href='/overview/community' locale={activeLang}>
                  <a className={styles.mainSliderItemBtn}>
                    {/*{trans[activeLang]?.slider1_slide1_join_btn}*/}
                    Join the Community
                  </a>
                </Link>
              </div>
              <div className={`${styles.scrollMore}`}>
                <div
                  onClick={() => {
                    slideScrollDown();
                  }}
                >
                  <p>Scroll</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 2 ? styles.mainSliderActive : ''}`}>
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 1</div>
                <TaskSvg />
              </div>
              <h2 className={`font-90 ttl`}>Scalability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>This is one of the main reasons that blockchain technology cannot be used on a mass-adoption scale yet. Low throughput and its environmental impact are the biggest obstacles that blockchain has to overcome in order to scale.</p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <SolutionSvg />
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>We combine the use of AI based PoS consensus, a scalable and secure parallel protocol for distributed ledger via sharding, side chains, and off-chain processing. These techniques allow for acceleration of block broadcasting in blockchain networks and scaling out through asynchronous consensus zones.</p>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemReverse} ${
              activeSlide == 3 ? styles.mainSliderActive : ''
            }`}
          >
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 2</div>
                <TaskSvg />
              </div>
              <h2 className={`font-90 ttl`}>Usability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                Rapid innovation is taking place in the blockchain sector. However, this innovation is taking place in
                the backend of blockchains and not in the ease of use for the client when using the front end. Complex
                technology needs to be easy to use for the ordinary individual, which blockchain is not yet.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <SolutionSvg />
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                We are developing an easy to use ecosystem. This will include a wallet and simplified payment gateways,
                giving you ease of use and access to our sophisticated solution. A hassle-free user experience, all
                while maintaining your privacy.
              </p>
            </div>
          </div>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 4 ? styles.mainSliderActive : ''}`}>
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 3</div>
                <TaskSvg />
              </div>
              <h2 className={`font-90 ttl`}>Interoperability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                This refers to the communication between chains. Currently, there are no solutions available for true
                cross-chain communication without the need for a 3rd party, like a centralised exchange.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <SolutionSvg />
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                We address blockchain interoperability by improving the efficiency of cross-chain transactional logic
                via trusted relays, hash-locking , notary schemes, Blockchain Migrators and bridges, as well as side
                chains.
              </p>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemReverse} ${
              activeSlide == 5 ? styles.mainSliderActive : ''
            }`}
          >
            <div className={`${styles.mainSliderItemHalf} pT-180`}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 4</div>
                <TaskSvg />
              </div>
              <h2 className={`font-90 ttl`}>Security</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                Although blockchain is regarded as more secure because of its decentralised nature. However, some
                blockchains can fall victim to either a 51% attack, endpoint vulnerabilities, vendor exploits, or faulty
                source code. This can be accomplished on both a proof of stake chain and a proof of work chain.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <SolutionSvg />
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                Security is guaranteed in our ecosystem thanks to secure multi-party computation, committee
                reconfiguration, distributed random generation, attribute-based encryption and zero-knowledge proof that
                we have implemented into our solution which allows you to transact securely and privately in our
                ecosystem.
              </p>
            </div>
          </div>
        </div>
        <Footer active={activeSlide == 5} />
      </ReactScrollWheelHandler>
    </>
  );
};

export default MainSlider;

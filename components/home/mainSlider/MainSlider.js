import { React, useState, useEffect } from 'react';

import Footer from '../../layout/Footer';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

import Microscheme from '../../UI/microscheme/Microscheme';

import styles from './MainSlider.module.css';

const MainSlider = () => {
  const [levels, setLevels] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    setLevels([4, 5, 6, 9, 10, 11, 12]);
    // setLevels([7]);
    setActiveSlide(1);
  }, []);
  let setLvl = array => {
    console.log(levels);
    if (levels.length > 0) {
      setLevels([]);
    } else {
      setLevels(array);
    }
  };
  let microSchemes = [
    [4, 5, 6, 9, 10, 11, 12],
    [5, 6, 11, 12],
    [1, 2, 7, 8],
    [4, 5, 6, 11, 12],
    [1, 2, 3, 7, 8],
    [1, 2, 3, 7, 8],
  ];
  let scrollBlocker = true;
  let slideScrollDown = () => {
    if (activeSlide !== 5 && scrollBlocker) {
      setActiveSlide(0);
      setLevels(microSchemes[activeSlide]);
      scrollBlocker = false;
      setTimeout(() => {
        setActiveSlide(activeSlide + 1);
        scrollBlocker = true;
      }, 300);
    }
  };
  let slideScrollUp = () => {
    if (activeSlide !== 1 && scrollBlocker) {
      setActiveSlide(0);
      setLevels(microSchemes[activeSlide - 2]);
      scrollBlocker = false;
      setTimeout(() => {
        setActiveSlide(activeSlide - 1);
        scrollBlocker = true;
      }, 300);
    }
  };
  return (
    <>
      {true && <Microscheme lvl={levels} />}
      {/*${styles.mainSliderActive}*/}
      <ReactScrollWheelHandler upHandler={e => slideScrollUp()} downHandler={e => slideScrollDown()}>
        <div className={`${styles.mainSlider}`}>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 1 ? styles.mainSliderActive : ''}`}>
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
              <h1 className='font-90 ttl'>
                A Virtual World of
                <br />
                Interconnected Blockchains
              </h1>
              <div className={styles.mainSliderItemBtnOut}>
                <a href='##' className={styles.mainSliderItemBtn}>
                  Join the Community
                </a>
              </div>
              <div className={`${styles.scrollMore}`}>
                <div
                  onClick={() => {
                    slideScrollDown();
                  }}
                >
                  <p>Scroll Down To Continue</p>
                  <svg
                    width='14'
                    height='11'
                    viewBox='0 0 14 11'
                    fill='rgba(233, 107, 107, 1)'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M-2.18557e-07 5.5C-2.28619e-07 5.26981 0.0914429 5.04905 0.254213 4.88628L4.38628 0.754214C4.72523 0.415263 5.27477 0.415263 5.61372 0.754214C5.95267 1.09316 5.95267 1.64271 5.61372 1.98166L2.09539 5.5L5.61372 9.01834C5.95268 9.35729 5.95268 9.90684 5.61372 10.2458C5.27477 10.5847 4.72523 10.5847 4.38628 10.2458L0.254213 6.11372C0.091443 5.95095 -2.08495e-07 5.73019 -2.18557e-07 5.5Z'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.113281 5.50023C0.113281 5.02088 0.50187 4.63229 0.981219 4.63229L12.438 4.63229C12.9173 4.63229 13.3059 5.02088 13.3059 5.50023C13.3059 5.97957 12.9173 6.36816 12.438 6.36816L0.981219 6.36816C0.50187 6.36816 0.113281 5.97958 0.113281 5.50023Z'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 2 ? styles.mainSliderActive : ''}`}>
            <div className={styles.mainSliderItemHalf}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 1</div>
                <svg width='67' height='37' viewBox='0 0 67 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7.5 36.5V29.5H10.5V36.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 36.5V29.5H18.5V36.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 36.5V29.5H26.5V36.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 36.5V29.5H34.5V36.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 36.5V29.5H42.5V36.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 36.5V29.5H50.5V36.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 36.5V29.5H58.5V36.5H55.5Z' fill='#162029' stroke='#162029' />
                  <path d='M7.5 7.5V0.5H10.5V7.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 7.5V0.5H18.5V7.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 7.5V0.5H26.5V7.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 7.5V0.5H34.5V7.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 7.5V0.5H42.5V7.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 7.5V0.5H50.5V7.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 7.5V0.5H58.5V7.5H55.5Z' fill='#162029' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' fill='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <h2 className={`font-90 ttl`}>Scalability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                This is one of the main reasons that blockchain technology cannot be used on a mass-adoption scale yet.
                Low throughput and its environmental impact are the biggest obstacles that blockchain has to overcome in
                order to scale.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <svg width='111' height='43' viewBox='0 0 111 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5.5 42.5V35.5H8.5V42.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 42.5V35.5H16.5V42.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 42.5V35.5H24.5V42.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 42.5V35.5H32.5V42.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 42.5V35.5H40.5V42.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 42.5V35.5H48.5V42.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 42.5V35.5H56.5V42.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 42.5V35.5H64.5V42.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 42.5V35.5H72.5V42.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 42.5V35.5H80.5V42.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 42.5V35.5H88.5V42.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 42.5V35.5H96.5V42.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 42.5V35.5H104.5V42.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M5.5 7.5V0.5H8.5V7.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 7.5V0.5H16.5V7.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 7.5V0.5H24.5V7.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 7.5V0.5H32.5V7.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 7.5V0.5H40.5V7.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 7.5V0.5H48.5V7.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 7.5V0.5H56.5V7.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 7.5V0.5H64.5V7.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 7.5V0.5H72.5V7.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 7.5V0.5H80.5V7.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 7.5V0.5H88.5V7.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 7.5V0.5H96.5V7.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 7.5V0.5H104.5V7.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' fill='#A6D0DD' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                We combine the use of AI based PoS consensus, a scalable and secure parallel protocol for distributed
                ledger via sharding, side chains, and off-chain processing. These techniques allow for acceleration of
                block broadcasting in blockchain networks and scaling out through asynchronous consensus zones.
              </p>
            </div>
          </div>
          <div
            className={`container ${styles.mainSliderItem} ${styles.mainSliderItemReverse} ${
              activeSlide == 3 ? styles.mainSliderActive : ''
            }`}
          >
            <div className={styles.mainSliderItemHalf}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 2</div>
                <svg width='67' height='37' viewBox='0 0 67 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7.5 36.5V29.5H10.5V36.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 36.5V29.5H18.5V36.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 36.5V29.5H26.5V36.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 36.5V29.5H34.5V36.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 36.5V29.5H42.5V36.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 36.5V29.5H50.5V36.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 36.5V29.5H58.5V36.5H55.5Z' fill='#162029' stroke='#162029' />
                  <path d='M7.5 7.5V0.5H10.5V7.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 7.5V0.5H18.5V7.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 7.5V0.5H26.5V7.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 7.5V0.5H34.5V7.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 7.5V0.5H42.5V7.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 7.5V0.5H50.5V7.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 7.5V0.5H58.5V7.5H55.5Z' fill='#162029' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' fill='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <h2 className={`font-90 ttl`}>Usability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                Rapid innovation is taking place in the blockchain sector. However, this innovation is taking place in
                the backend of blockchains and not in the ease of use for the client when using the front end. Complex
                technology needs to be easy to use for the ordinary individual, which blockchain is not yet.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <svg width='111' height='43' viewBox='0 0 111 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5.5 42.5V35.5H8.5V42.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 42.5V35.5H16.5V42.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 42.5V35.5H24.5V42.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 42.5V35.5H32.5V42.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 42.5V35.5H40.5V42.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 42.5V35.5H48.5V42.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 42.5V35.5H56.5V42.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 42.5V35.5H64.5V42.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 42.5V35.5H72.5V42.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 42.5V35.5H80.5V42.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 42.5V35.5H88.5V42.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 42.5V35.5H96.5V42.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 42.5V35.5H104.5V42.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M5.5 7.5V0.5H8.5V7.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 7.5V0.5H16.5V7.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 7.5V0.5H24.5V7.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 7.5V0.5H32.5V7.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 7.5V0.5H40.5V7.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 7.5V0.5H48.5V7.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 7.5V0.5H56.5V7.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 7.5V0.5H64.5V7.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 7.5V0.5H72.5V7.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 7.5V0.5H80.5V7.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 7.5V0.5H88.5V7.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 7.5V0.5H96.5V7.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 7.5V0.5H104.5V7.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' fill='#A6D0DD' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <p className={`font-20 ${styles.mainSliderItemHalfDesc2}`}>
                We are developing an easy to use ecosystem. This will include a wallet and simplified payment gateways,
                giving you ease of use and access to our sophisticated solution. A hassle-free user experience, all
                while maintaining your privacy.
              </p>
            </div>
          </div>
          <div className={`container ${styles.mainSliderItem} ${activeSlide == 4 ? styles.mainSliderActive : ''}`}>
            <div className={styles.mainSliderItemHalf}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 3</div>
                <svg width='67' height='37' viewBox='0 0 67 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7.5 36.5V29.5H10.5V36.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 36.5V29.5H18.5V36.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 36.5V29.5H26.5V36.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 36.5V29.5H34.5V36.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 36.5V29.5H42.5V36.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 36.5V29.5H50.5V36.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 36.5V29.5H58.5V36.5H55.5Z' fill='#162029' stroke='#162029' />
                  <path d='M7.5 7.5V0.5H10.5V7.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 7.5V0.5H18.5V7.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 7.5V0.5H26.5V7.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 7.5V0.5H34.5V7.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 7.5V0.5H42.5V7.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 7.5V0.5H50.5V7.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 7.5V0.5H58.5V7.5H55.5Z' fill='#162029' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' fill='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <h2 className={`font-90 ttl`}>Interoperability</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                This refers to the communication between chains. Currently, there are no solutions available for true
                cross-chain communication without the need for a 3rd party, like a centralised exchange.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <svg width='111' height='43' viewBox='0 0 111 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5.5 42.5V35.5H8.5V42.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 42.5V35.5H16.5V42.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 42.5V35.5H24.5V42.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 42.5V35.5H32.5V42.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 42.5V35.5H40.5V42.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 42.5V35.5H48.5V42.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 42.5V35.5H56.5V42.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 42.5V35.5H64.5V42.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 42.5V35.5H72.5V42.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 42.5V35.5H80.5V42.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 42.5V35.5H88.5V42.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 42.5V35.5H96.5V42.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 42.5V35.5H104.5V42.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M5.5 7.5V0.5H8.5V7.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 7.5V0.5H16.5V7.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 7.5V0.5H24.5V7.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 7.5V0.5H32.5V7.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 7.5V0.5H40.5V7.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 7.5V0.5H48.5V7.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 7.5V0.5H56.5V7.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 7.5V0.5H64.5V7.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 7.5V0.5H72.5V7.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 7.5V0.5H80.5V7.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 7.5V0.5H88.5V7.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 7.5V0.5H96.5V7.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 7.5V0.5H104.5V7.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' fill='#A6D0DD' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' stroke='#162029' />
                </svg>
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
            <div className={styles.mainSliderItemHalf}>
              <div className={styles.mainSliderItemTask}>
                <div className={styles.mainSliderItemTaskTxt}>Task 4</div>
                <svg width='67' height='37' viewBox='0 0 67 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7.5 36.5V29.5H10.5V36.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 36.5V29.5H18.5V36.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 36.5V29.5H26.5V36.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 36.5V29.5H34.5V36.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 36.5V29.5H42.5V36.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 36.5V29.5H50.5V36.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 36.5V29.5H58.5V36.5H55.5Z' fill='#162029' stroke='#162029' />
                  <path d='M7.5 7.5V0.5H10.5V7.5H7.5Z' fill='#162029' stroke='#162029' />
                  <path d='M15.5 7.5V0.5H18.5V7.5H15.5Z' fill='#162029' stroke='#162029' />
                  <path d='M23.5 7.5V0.5H26.5V7.5H23.5Z' fill='#162029' stroke='#162029' />
                  <path d='M31.5 7.5V0.5H34.5V7.5H31.5Z' fill='#162029' stroke='#162029' />
                  <path d='M39.5 7.5V0.5H42.5V7.5H39.5Z' fill='#162029' stroke='#162029' />
                  <path d='M47.5 7.5V0.5H50.5V7.5H47.5Z' fill='#162029' stroke='#162029' />
                  <path d='M55.5 7.5V0.5H58.5V7.5H55.5Z' fill='#162029' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' fill='#162029' />
                  <rect x='0.5' y='7.5' width='66' height='22' rx='3.5' stroke='#162029' />
                </svg>
              </div>
              <h2 className={`font-90 ttl`}>Security</h2>
              <p className={`${styles.mainSliderItemHalfDesc1}`}>
                Although blockchain is regarded as more secure because of its decentralised nature. However, some
                blockchains can fall victim to either a 51% attack, endpoint vulnerabilities, vendor exploits, or faulty
                source code. This can be accomplished on both a proof of stake chain and a proof of work chain.
              </p>
              <div className={styles.mainSliderItemSolution}>
                <div className={styles.mainSliderItemSolutionTxt}>Solution</div>
                <svg width='111' height='43' viewBox='0 0 111 43' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5.5 42.5V35.5H8.5V42.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 42.5V35.5H16.5V42.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 42.5V35.5H24.5V42.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 42.5V35.5H32.5V42.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 42.5V35.5H40.5V42.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 42.5V35.5H48.5V42.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 42.5V35.5H56.5V42.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 42.5V35.5H64.5V42.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 42.5V35.5H72.5V42.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 42.5V35.5H80.5V42.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 42.5V35.5H88.5V42.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 42.5V35.5H96.5V42.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 42.5V35.5H104.5V42.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M5.5 7.5V0.5H8.5V7.5H5.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M13.5 7.5V0.5H16.5V7.5H13.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M21.5 7.5V0.5H24.5V7.5H21.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M29.5 7.5V0.5H32.5V7.5H29.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M37.5 7.5V0.5H40.5V7.5H37.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M45.5 7.5V0.5H48.5V7.5H45.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M53.5 7.5V0.5H56.5V7.5H53.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M61.5 7.5V0.5H64.5V7.5H61.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M69.5 7.5V0.5H72.5V7.5H69.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M77.5 7.5V0.5H80.5V7.5H77.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M85.5 7.5V0.5H88.5V7.5H85.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M93.5 7.5V0.5H96.5V7.5H93.5Z' fill='#A6D0DD' stroke='#162029' />
                  <path d='M101.5 7.5V0.5H104.5V7.5H101.5Z' fill='#A6D0DD' stroke='#162029' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' fill='#A6D0DD' />
                  <rect x='0.5' y='7.5' width='110' height='28' rx='3.5' stroke='#162029' />
                </svg>
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

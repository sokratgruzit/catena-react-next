import { useState } from 'react';

import CornerDecor from '../UI/cornerDecor/CornerDecor';
import SinglePredictionItem from './components/singlePredictionItem/SinglePredictionItem';
import Timer from './components/Timer';
import WinRoutes from './components/WinRoutes';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './Prediction.module.css';

let predictionData = [
  {
    id: 1,
    numHashTag: '#23147',
    payOut: '1.87x Payout',
    lastPrice: '$874.097',
    upPrice: '$-0.009',
    lockPrice: '$120.034',
    prizePool: '87.587 CMCX',
    payDown: '2.03x Payout',
    action: 'expired',
  },
  {
    id: 2,
    numHashTag: '#24534',
    payOut: '2.34x Payout',
    lastPrice: '$532.234',
    upPrice: '$2.062',
    lockPrice: '$354.320',
    prizePool: '65.214 CMCX',
    payDown: '1.21x Payout',
    action: 'live',
  },
  {
    id: 3,
    numHashTag: '#35125',
    payOut: '0x Payout',
    upPrice: '$2.062',
    lockPrice: '$354.320',
    prizePool: '47.609 CMCX',
    payDown: '0x Payout',
    action: 'next',
  },
  {
    id: 4,
    numHashTag: '#24534',
    payOut: '2.34x Payout',
    lastPrice: '$532.234',
    upPrice: '$2.062',
    lockPrice: '$354.320',
    prizePool: '65.214 CMCX',
    payDown: '1.21x Payout',
    action: 'later',
  },
];

const Prediction = () => {
  const [activeBtns, setActiveBtns] = useState(null);
  const [activeBtnsDwn, setActiveBtnsDwn] = useState(null);
  const [upBtns, setUpBtns] = useState(false);
  const [downBtns, setDownBtns] = useState(false);

  const activateBtns = id => {
    setActiveBtns(id);
  };

  const activateDwn = id => {
    setActiveBtnsDwn(id);
  };
  const changeUpBtns = () => {
    setUpBtns(!upBtns);
  };
  const changeDownBtns = () => {
    setDownBtns(!downBtns);
  };

  let swiperItems = predictionData.map(item => {
    if (item.action === 'expired') {
      return (
        <SwiperSlide key={item.id}>
          <div className={`${styles.sliderMainConteinerExpierd}`}>
            <CornerDecor />
            <div className={styles.titleExpierd}>
              <div>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g opacity='0.3'>
                    <circle cx='7.86914' cy='7.14453' r='6.5' stroke='white' />
                    <line
                      x1='3.27462'
                      y1='2.29415'
                      x2='12.5295'
                      y2='11.8193'
                      stroke='white'
                    />
                  </g>
                </svg>
                <p>{item.action}</p>
              </div>
              <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
            </div>
            <div className={styles.upPriceExpierd}>
              <div>
                <span>
                  <svg
                    width='10'
                    height='13'
                    viewBox='0 0 10 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.31793 5.21512L4.74735 1.64453L1.17676 5.21512'
                      stroke='#66BB6A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.74707 11.6441V1.74414'
                      stroke='#66BB6A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <p>
                  shit
                  {/* <div style={{ background: 'transparent' }}>UP</div> */}
                </p>
              </div>
              <p>{item.payOut}</p>
            </div>
            <div className={styles.lastPriceExpierd}>
              <h4>Last Price</h4>
              <div>
                <div className={styles.mainPriceExpierd}>
                  <h2 className={styles.price}>{item.lastPrice}</h2>
                  <div className={styles.priceUpExpierd}>
                    <svg
                      width='12'
                      height='15'
                      viewBox='0 0 12 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.6829 6.37206C10.5391 6.37206 10.3953 6.31908 10.2817 6.20555L6.08875 2.01255L1.89575 6.20555C1.67626 6.42504 1.31297 6.42504 1.09348 6.20555C0.987913 6.09873 0.928711 5.9546 0.928711 5.80442C0.928711 5.65423 0.987913 5.5101 1.09348 5.40328L5.68761 0.809148C5.9071 0.589659 6.2704 0.589659 6.48988 0.809148L11.084 5.40328C11.3035 5.62277 11.3035 5.98606 11.084 6.20555C10.9781 6.31908 10.8267 6.37206 10.6829 6.37206Z'
                        fill='white'
                      />
                      <path
                        d='M6.08815 14.6447C5.77784 14.6447 5.52051 14.3874 5.52051 14.0771V1.33913C5.52051 1.02882 5.77784 0.771484 6.08815 0.771484C6.39846 0.771484 6.6558 1.02882 6.6558 1.33913V14.0771C6.6558 14.3874 6.39846 14.6447 6.08815 14.6447Z'
                        fill='white'
                      />
                    </svg>
                    <p>{item.upPrice}</p>
                  </div>
                </div>
              </div>
              <div className={styles.border}>
                <div className={styles.widtBorder}>
                  <h3>Lock Price:</h3>
                  <p>Prize Pool:</p>
                </div>
                <div className={styles.leftSide}>
                  <h3>{item.lockPrice}</h3>
                  <p>{item.prizePool}</p>
                </div>
              </div>
            </div>
            <div className={styles.priceDownContainer}>
              <p>{item.payDown}</p>
              <div className={styles.priceDownExpierd}>
                <p className={styles.wtf}> DOWN</p>
                <span>
                  <svg
                    width='10'
                    height='13'
                    viewBox='0 0 10 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.81891 8.07394L5.24832 11.6445L1.67773 8.07394'
                      stroke='#E94A4A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.24805 1.64492V11.5449'
                      stroke='#E94A4A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
    if (item.action === 'live') {
      return (
        <SwiperSlide key={item.id}>
          <div className={`${styles.sliderMainConteiner}`}>
            <CornerDecor />
            <div className={styles.title}>
              <div>
                <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='7.86914' cy='7.14453' r='6.5' stroke='#FF7152' />
                  <circle cx='7.86914' cy='7.14453' r='3' fill='#FF7152' />
                </svg>
                <p className={styles.activLive}>{item.action}</p>
              </div>
              <p className={styles.titlePBorder}>{item.numHashTag}</p>
            </div>
            <div className={styles.upPrice}>
              <div>
                <span>
                  <svg
                    width='10'
                    height='13'
                    viewBox='0 0 10 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.31793 5.21512L4.74735 1.64453L1.17676 5.21512'
                      stroke='#66BB6A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.74707 11.6441V1.74414'
                      stroke='#66BB6A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <p></p>
                <div style={{ background: 'transparent' }}>UP</div>
              </div>
              <p>{item.payOut}</p>
            </div>
            <div className={styles.lastPrice}>
              <h4>Last Price</h4>
              <div>
                <div className={styles.mainPrice}>
                  <h2>{item.lastPrice}</h2>
                  <div className={styles.priceUP}>
                    <svg
                      width='12'
                      height='15'
                      viewBox='0 0 12 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.6829 6.37206C10.5391 6.37206 10.3953 6.31908 10.2817 6.20555L6.08875 2.01255L1.89575 6.20555C1.67626 6.42504 1.31297 6.42504 1.09348 6.20555C0.987913 6.09873 0.928711 5.9546 0.928711 5.80442C0.928711 5.65423 0.987913 5.5101 1.09348 5.40328L5.68761 0.809148C5.9071 0.589659 6.2704 0.589659 6.48988 0.809148L11.084 5.40328C11.3035 5.62277 11.3035 5.98606 11.084 6.20555C10.9781 6.31908 10.8267 6.37206 10.6829 6.37206Z'
                        fill='white'
                      />
                      <path
                        d='M6.08815 14.6447C5.77784 14.6447 5.52051 14.3874 5.52051 14.0771V1.33913C5.52051 1.02882 5.77784 0.771484 6.08815 0.771484C6.39846 0.771484 6.6558 1.02882 6.6558 1.33913V14.0771C6.6558 14.3874 6.39846 14.6447 6.08815 14.6447Z'
                        fill='white'
                      />
                    </svg>
                    <p>{item.upPrice}</p>
                  </div>
                </div>
              </div>
              <div className={styles.border}>
                <div className={styles.widtBorder}>
                  <h3>Lock Price:</h3>
                  <p>Prize Pool:</p>
                </div>
                <div className={styles.leftSide}>
                  <h3>{item.lockPrice}</h3>
                  <p>{item.prizePool}</p>
                </div>
              </div>
            </div>
            <div className={styles.priceDownContainer}>
              <p>{item.payOut}</p>
              <div className={styles.priceDown}>
                <p>DOWN</p>
                <span>
                  <svg
                    width='10'
                    height='13'
                    viewBox='0 0 10 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.81891 8.07394L5.24832 11.6445L1.67773 8.07394'
                      stroke='#E94A4A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.24805 1.64492V11.5449'
                      stroke='#E94A4A'
                      strokeWidth='1.5'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
    if (item.action === 'next') {
      return (
        <SwiperSlide key={item.id}>
          <div className={styles.sliderMainConteiner}>
            <CornerDecor />
            <div
              className={`${
                activeBtns === item.id ? styles.containerOpacity : ''
              } ${activeBtnsDwn === item.id ? styles.containerOpacity : ''} `}
            >
              <div className={styles.titleNext}>
                <div>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='7.85059'
                      cy='7.14453'
                      r='6.5'
                      stroke='#0500FF'
                    />
                    <path
                      d='M5.35059 5.18904V9.10057C5.35059 9.90167 6.22118 10.4044 6.91601 10.0039L8.61224 9.027L10.3085 8.04605C11.0033 7.64549 11.0033 6.64411 10.3085 6.24356L8.61224 5.26261L6.91601 4.28575C6.22118 3.8852 5.35059 4.38384 5.35059 5.18904V5.18904Z'
                      fill='#0500FF'
                    />
                  </svg>
                  <p className={styles.activNext}>{item.action}</p>
                </div>
                <p className={styles.titlePBorderNext}>{item.numHashTag}</p>
              </div>
              <div className={styles.upPriceNext}>
                <div>
                  <span>
                    <svg
                      width='10'
                      height='13'
                      viewBox='0 0 10 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.31793 5.21512L4.74735 1.64453L1.17676 5.21512'
                        stroke='#66BB6A'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.74707 11.6441V1.74414'
                        stroke='#66BB6A'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                  <p>UP</p>
                </div>
                <p>{item.payOut}</p>
              </div>
              <div className={styles.lastPriceNextBorder}>
                <div className={styles.lastPriceNext}>
                  <p>Prize Pool:</p>
                  <h2 className={styles.price}>{item.prizePool}</h2>
                </div>
                <div>
                  <button
                    onClick={() => {
                      activateBtns(item.id);
                    }}
                    className={styles.enterBottom}
                  >
                    Enter UP
                  </button>
                  <button
                    className={styles.downBottom}
                    onClick={() => {
                      activateDwn(item.id);
                    }}
                  >
                    Enter DOWN
                  </button>
                </div>
              </div>
              <div className={styles.priceDownContainer}>
                <p>{item.payOut}</p>
                <div className={styles.priceDown}>
                  <p>DOWN</p>
                  <span>
                    <svg
                      width='10'
                      height='13'
                      viewBox='0 0 10 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.81891 8.07394L5.24832 11.6445L1.67773 8.07394'
                        stroke='#E94A4A'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5.24805 1.64492V11.5449'
                        stroke='#E94A4A'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* button up */}
            <div
              className={`${styles.btnsAction} ${
                activeBtns === item.id ? styles.btnsActionActive : ''
              }`}
            >
              <div>
                <div className={styles.bottomBorder}>
                  <div className={styles.positionBt}>
                    <p
                      onClick={() => {
                        activateBtns(null);
                      }}
                    >
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.0556 6.02637H1.45898'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                        <path
                          d='M6.41602 1.36914C6.41602 1.36914 1.45898 3.94199 1.45898 5.95898C1.45898 7.97598 6.41602 9.63086 6.41602 9.63086'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                      </svg>
                    </p>
                    <p>Set Position</p>
                  </div>
                  <button
                    onClick={changeUpBtns}
                    className={`${styles.upButton} ${
                      upBtns ? styles.wtpakk : ''
                    }`}
                  >
                    <svg
                      width='10'
                      height='11'
                      viewBox='0 0 10 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.60309 5.13895L5.0325 1.56836L1.46191 5.13895'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5.0332 9.43211L5.0332 1.56836'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <p>{upBtns ? 'DOWN' : 'UP'}</p>
                  </button>
                </div>
                <div className={styles.commitSection}>
                  <div className={styles.commitText}>
                    <p>Commit:</p>
                    <p>CMCX</p>
                  </div>
                  <div>
                    <div className={styles.cmcxPrice}>
                      {/* <input type="text" value="0.0" /> */}
                    </div>
                    <div className={styles.range}>
                      {/* <input type="range"  min="0" max="100" /> */}
                    </div>
                    <div className={styles.bottomSection}>
                      <button>10%</button>
                      <button>25%</button>
                      <button>50%</button>
                      <button>75%</button>
                      <button>Max</button>
                    </div>
                    <button className={styles.walet}>conect walet</button>
                    <div className={styles.text}>
                      <p>
                        You won’t be able to remove or change your position once
                        you enter it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* button down */}
            <div
              className={`${styles.btnsActionDwn} ${
                activeBtnsDwn === item.id ? styles.btnsActionActiveDwn : ''
              }`}
            >
              <div>
                <div className={styles.bottomBorder}>
                  <div className={styles.positionBt}>
                    <p
                      onClick={() => {
                        setActiveBtnsDwn(null);
                      }}
                    >
                      <svg
                        width='12'
                        height='11'
                        viewBox='0 0 12 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.0556 6.02637H1.45898'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                        <path
                          d='M6.41602 1.36914C6.41602 1.36914 1.45898 3.94199 1.45898 5.95898C1.45898 7.97598 6.41602 9.63086 6.41602 9.63086'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                        />
                      </svg>
                    </p>
                    <p>Set Position</p>
                  </div>
                  <button
                    onClick={changeDownBtns}
                    className={`${styles.downButton} ${
                      downBtns ? styles.wtpakk1 : ''
                    }`}
                  >
                    <svg
                      width='9'
                      height='11'
                      viewBox='0 0 9 11'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0.966245 5.86105L4.53683 9.43164L8.10742 5.86105'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M4.53711 1.56789L4.53711 9.43164'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <p>{downBtns ? 'UP' : 'DOWN'}</p>
                  </button>
                </div>
                <div className={styles.commitSection}>
                  <div className={styles.commitText}>
                    <p>Commit:</p>
                    <p>CMCX</p>
                  </div>
                  <div>
                    <div className={styles.cmcxPrice}>
                      {/* <input type="text" value="0.0" /> */}
                    </div>
                    <div className={styles.range}>
                      {/* <input type="range"  min="0" max="100" /> */}
                    </div>
                    <div className={styles.bottomSection}>
                      <button>10%</button>
                      <button>25%</button>
                      <button>50%</button>
                      <button>75%</button>
                      <button>Max</button>
                    </div>
                    <button className={styles.walet}>conect walet</button>
                    <div className={styles.text}>
                      <p>
                        You won’t be able to remove or change your position once
                        you enter it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
    if (item.action === 'later') {
      return (
        <SwiperSlide key={item.id}>
          <div className={`${styles.sliderMainContainer}`}>
            <CornerDecor />
            <div className={styles.laterBorderContent}>
              <div className={styles.laterBorder}>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.6833 7.14388C12.6833 10.3639 10.0699 12.9772 6.84994 12.9772C3.62994 12.9772 1.0166 10.3639 1.0166 7.14388C1.0166 3.92388 3.62994 1.31055 6.84994 1.31055C10.0699 1.31055 12.6833 3.92388 12.6833 7.14388Z'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.01379 8.99858L7.20546 7.91941C6.89046 7.73275 6.63379 7.28358 6.63379 6.91608V4.52441'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p>Later</p>
              </div>
              <p>{item.numHashTag}</p>
            </div>
            <div className={styles.upLater}>
              <svg
                width='10'
                height='13'
                viewBox='0 0 10 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.31891 5.21512L4.74832 1.64453L1.17773 5.21512'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.74805 11.6441V1.74414'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <p>UP</p>
            </div>
            <div className={styles.entryStarts}>
              <div>
                <p className={styles.entryStartsTitle}>Entry Starts</p>
                <p>~09:32</p>
              </div>
            </div>
            <div className={styles.downLater}>
              <p>
                DOWN
                <svg
                  width='10'
                  height='13'
                  viewBox='0 0 10 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.81891 8.07394L5.24832 11.6445L1.67773 8.07394'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.24805 1.64492V11.5449'
                    stroke='white'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </p>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  });

  console.log(swiperItems);

  return (
    <>
      <div className={styles.borderTab}>
        <WinRoutes />
      </div>
      <div className={styles.maincContent}>
        <div className={styles.cmcxusdContainer}>
          <div>
            <div>
              <svg
                width='31'
                height='31'
                viewBox='0 0 31 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.869141'
                  y='0.640625'
                  width='30'
                  height='30'
                  rx='4'
                  fill='white'
                  fillOpacity='0.1'
                />
                <path
                  d='M15.8691 23.6406C11.4561 23.6406 7.86914 20.0536 7.86914 15.6406C7.86914 11.2276 11.4561 7.64062 15.8691 7.64062C20.2822 7.64062 23.8691 11.2276 23.8691 15.6406C23.8691 20.0536 20.2822 23.6406 15.8691 23.6406ZM15.8691 8.7569C12.0738 8.7569 8.98542 11.8453 8.98542 15.6406C8.98542 19.436 12.0738 22.5243 15.8691 22.5243C19.6645 22.5243 22.7529 19.436 22.7529 15.6406C22.7529 11.8453 19.6645 8.7569 15.8691 8.7569Z'
                  fill='white'
                />
                <path
                  d='M15.8686 17.2943C15.4822 17.2943 15.1618 16.974 15.1618 16.5876V16.3897C15.1618 15.2967 15.9628 14.7596 16.2643 14.5523C16.613 14.3167 16.726 14.1565 16.726 13.9115C16.726 13.4404 16.3397 13.0541 15.8686 13.0541C15.3974 13.0541 15.0111 13.4404 15.0111 13.9115C15.0111 14.2979 14.6907 14.6182 14.3044 14.6182C13.918 14.6182 13.5977 14.2979 13.5977 13.9115C13.5977 12.6583 14.6153 11.6406 15.8686 11.6406C17.1218 11.6406 18.1395 12.6583 18.1395 13.9115C18.1395 14.9857 17.348 15.5228 17.0558 15.7207C16.6884 15.9657 16.5753 16.1259 16.5753 16.3897V16.5876C16.5753 16.9834 16.2549 17.2943 15.8686 17.2943Z'
                  fill='white'
                />
                <path
                  d='M15.8688 19.6401C15.7761 19.6402 15.6843 19.622 15.5987 19.5867C15.513 19.5513 15.4351 19.4995 15.3695 19.434C15.3039 19.3686 15.2518 19.2908 15.2162 19.2052C15.1806 19.1197 15.1622 19.0279 15.1621 18.9352C15.162 18.8425 15.1801 18.7507 15.2155 18.6651C15.2508 18.5794 15.3027 18.5015 15.3682 18.4359C15.4336 18.3703 15.5113 18.3182 15.5969 18.2826C15.6825 18.247 15.7743 18.2286 15.8669 18.2285C16.0541 18.2283 16.2337 18.3024 16.3663 18.4346C16.4988 18.5667 16.5734 18.7462 16.5737 18.9333C16.5739 19.1205 16.4998 19.3001 16.3676 19.4327C16.2354 19.5652 16.056 19.6398 15.8688 19.6401Z'
                  fill='white'
                />
              </svg>
            </div>
            <div>
              <svg
                width='31'
                height='31'
                viewBox='0 0 31 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.869141'
                  y='0.640625'
                  width='30'
                  height='30'
                  rx='4'
                  fill='white'
                  fillOpacity='0.1'
                />
                <path
                  d='M15.98 21.1107C15.6749 21.1107 15.4219 20.8577 15.4219 20.5526V18.9898C15.4219 18.6847 15.6749 18.4316 15.98 18.4316C16.2851 18.4316 16.5382 18.6847 16.5382 18.9898V20.5526C16.5382 20.8577 16.2851 21.1107 15.98 21.1107Z'
                  fill='white'
                />
                <path
                  d='M20.2593 23.6399H11.7012V22.3375C11.7012 21.2064 12.6165 20.291 13.7477 20.291H18.2128C19.344 20.291 20.2593 21.2064 20.2593 22.3375V23.6399ZM12.8175 22.5236H19.143V22.3375C19.143 21.824 18.7263 21.4073 18.2128 21.4073H13.7477C13.2342 21.4073 12.8175 21.824 12.8175 22.3375V22.5236Z'
                  fill='white'
                />
                <path
                  d='M20.4454 23.6407H11.5152C11.2101 23.6407 10.957 23.3877 10.957 23.0826C10.957 22.7774 11.2101 22.5244 11.5152 22.5244H20.4454C20.7505 22.5244 21.0035 22.7774 21.0035 23.0826C21.0035 23.3877 20.7505 23.6407 20.4454 23.6407Z'
                  fill='white'
                />
                <path
                  d='M20.654 15.9677C20.4978 15.9677 20.3415 15.9008 20.2298 15.7743C20.1603 15.6951 20.1148 15.5976 20.099 15.4934C20.0832 15.3892 20.0976 15.2826 20.1405 15.1864C20.3936 14.6059 20.5201 13.9882 20.5201 13.3408V11.1082C20.5201 10.8477 20.4754 10.5947 20.3861 10.3268C20.3777 10.2998 20.3703 10.2725 20.3638 10.245C20.3415 10.1333 20.334 10.0217 20.334 9.91751C20.334 9.6124 20.5871 9.35938 20.8922 9.35938H21.3387C22.6708 9.35938 23.7573 10.4757 23.7573 11.8524C23.7573 12.991 23.2884 14.1147 22.4773 14.9259C22.4624 14.9408 22.4178 14.978 22.4103 14.9854C21.9712 15.3501 21.4726 15.7594 20.8029 15.9454C20.7508 15.9603 20.7061 15.9677 20.654 15.9677ZM21.5843 10.498C21.6215 10.6989 21.6364 10.9073 21.6364 11.1082V13.3408C21.6364 13.6459 21.614 13.9361 21.5694 14.2338L21.6959 14.1296C22.2912 13.5343 22.641 12.7008 22.641 11.8524C22.641 11.1826 22.1871 10.617 21.5843 10.498Z'
                  fill='white'
                />
                <path
                  d='M11.0912 15.9385C11.0327 15.9395 10.9747 15.9294 10.92 15.9087C10.3098 15.7152 9.73675 15.358 9.26047 14.8817C8.40465 13.9366 7.98047 12.9022 7.98047 11.8083C7.98047 10.4538 9.04465 9.38965 10.3991 9.38965H10.8828C11.0688 9.38965 11.2474 9.48639 11.3516 9.64267C11.4558 9.79895 11.4707 9.99988 11.3963 10.171C11.2772 10.439 11.2177 10.7441 11.2177 11.0641V13.2966C11.2177 13.9366 11.3442 14.5617 11.6047 15.1571C11.694 15.358 11.6493 15.5887 11.5079 15.7524C11.3963 15.8715 11.2474 15.9385 11.0912 15.9385ZM10.1386 10.5283C9.53582 10.6473 9.09675 11.1683 9.09675 11.8083C9.09675 12.6194 9.42419 13.4008 10.0716 14.1152C10.1014 14.1524 10.1386 14.1822 10.1758 14.212C10.1237 13.9069 10.1014 13.6017 10.1014 13.2966V11.0641C10.1014 10.8855 10.1163 10.7069 10.1386 10.5283Z'
                  fill='white'
                />
                <path
                  d='M15.869 19.1755C12.6913 19.1755 10.1016 16.5857 10.1016 13.4081V11.1755C10.1016 9.22574 11.6867 7.64062 13.6364 7.64062H18.1016C20.0513 7.64062 21.6364 9.22574 21.6364 11.1755V13.4081C21.6364 16.5857 19.0467 19.1755 15.869 19.1755ZM13.6364 8.7569C12.3044 8.7569 11.2178 9.84342 11.2178 11.1755V13.4081C11.2178 15.9755 13.3016 18.0592 15.869 18.0592C18.4364 18.0592 20.5202 15.9755 20.5202 13.4081V11.1755C20.5202 9.84342 19.4337 8.7569 18.1016 8.7569H13.6364Z'
                  fill='white'
                />
              </svg>
            </div>
            <div>
              <svg
                width='31'
                height='31'
                viewBox='0 0 31 31'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.869141'
                  y='0.640625'
                  width='30'
                  height='30'
                  rx='4'
                  fill='white'
                  fillOpacity='0.1'
                />
                <g opacity='0.3'>
                  <path
                    d='M17.7682 23.4097C17.5224 23.4097 17.2915 23.2458 17.2245 22.9926C17.1425 22.6946 17.3213 22.3892 17.6267 22.3073C19.098 21.9183 20.3992 21.0534 21.3275 19.8475C22.2559 18.6416 22.7592 17.1625 22.7589 15.6406C22.7589 11.8417 19.6677 8.75049 15.8688 8.75049C12.6435 8.75049 10.528 10.635 9.53731 11.7747H11.7273C11.8764 11.7747 12.0194 11.834 12.1249 11.9394C12.2304 12.0449 12.2896 12.1879 12.2896 12.3371C12.2896 12.4862 12.2304 12.6293 12.1249 12.7348C12.0194 12.8402 11.8764 12.8995 11.7273 12.8995H8.42744C8.39019 12.8995 8.32315 12.892 8.27101 12.8771C8.20729 12.8564 8.14702 12.8263 8.09224 12.7877C8.02716 12.7439 7.97352 12.6852 7.93582 12.6164C7.89557 12.5453 7.87022 12.4667 7.86133 12.3855V8.94416C7.86133 8.63876 8.11459 8.3855 8.41999 8.3855C8.72539 8.3855 8.97865 8.63876 8.97865 8.94416V10.7244C10.1928 9.42089 12.4796 7.64062 15.8688 7.64062C20.2859 7.64062 23.8762 11.2309 23.8762 15.6481C23.8762 19.2831 21.4256 22.4712 17.9097 23.3948C17.8651 23.4023 17.8129 23.4097 17.7682 23.4097Z'
                    fill='white'
                  />
                  <path
                    d='M15.3405 23.6406C15.3256 23.6406 15.3107 23.6331 15.3033 23.6331C14.4988 23.581 13.7092 23.4022 12.9643 23.1117C12.8957 23.0856 12.8328 23.0461 12.7795 22.9955C12.7262 22.945 12.6834 22.8844 12.6536 22.8172C12.6238 22.75 12.6077 22.6776 12.606 22.6042C12.6044 22.5307 12.6173 22.4576 12.644 22.3892C12.7558 22.1061 13.091 21.9646 13.3666 22.0689C14.0146 22.3222 14.6925 22.4711 15.3777 22.5233C15.6682 22.5382 15.8992 22.7914 15.8992 23.0894L15.8917 23.1192C15.8768 23.4097 15.631 23.6406 15.3405 23.6406ZM11.2362 22.0391C11.1096 22.0391 10.9904 21.9944 10.8861 21.9199C10.2604 21.4134 9.70922 20.8249 9.26229 20.1695C9.21896 20.1099 9.18818 20.0422 9.17181 19.9704C9.15544 19.8986 9.15382 19.8242 9.16706 19.7518C9.18029 19.6794 9.2081 19.6104 9.2488 19.549C9.2895 19.4876 9.34223 19.4352 9.40382 19.3948C9.52573 19.3143 9.67377 19.2833 9.81774 19.3082C9.9617 19.3331 10.0907 19.412 10.1785 19.5289V19.5363C10.1859 19.5438 10.1934 19.5587 10.2008 19.5661C10.5872 20.1235 11.0541 20.6205 11.5863 21.041C11.7129 21.1452 11.7949 21.3017 11.7949 21.473C11.7949 21.5996 11.7576 21.7262 11.6757 21.8305C11.564 21.9646 11.4075 22.0391 11.2362 22.0391Z'
                    fill='white'
                  />
                  <path
                    d='M18.5376 18.5005C18.4371 18.5023 18.3385 18.4737 18.2545 18.4185L15.9454 17.0405C15.3718 16.6979 14.9473 15.9455 14.9473 15.2826V12.2286C14.9473 11.9232 15.2005 11.6699 15.5059 11.6699C15.8113 11.6699 16.0646 11.9232 16.0646 12.2286V15.2826C16.0646 15.5507 16.288 15.9455 16.519 16.0796L18.8281 17.4576C19.0962 17.6141 19.1782 17.9567 19.0218 18.2249C18.9711 18.3082 18.9001 18.3772 18.8154 18.4254C18.7307 18.4736 18.6351 18.4995 18.5376 18.5005Z'
                    fill='white'
                  />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div className={styles.PredictionBlur__background}>
              <img
                className={styles.cmcxCoin}
                src={'../../images/win/prediction/cmcxCoin.png'}
                alt='coin'
              />
              <img
                src={'../../images/win/prediction/predictionBlur.png'}
                alt='blur'
              />
              <div className={styles.cmcxBlur}>
                <h4>CMCXUSD</h4>
                <p>$531.360</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.timerBlur}>
            <img
              className={styles.time}
              src={'../../images/win/prediction/time.png'}
              alt='time'
            />
            <img
              className={styles.blur}
              src={'../../images/win/prediction/timerBlur.png'}
              alt='timeBlur'
            />
            <div className={styles.timer}>
              <Timer />
              <span>5m</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.swiperTest}>
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          className='mySwiper'
          // freeMode={true}
          // scrollbar={true}
          // mousewheel={true}
          // loop={true}
        >
          {predictionData.map((item, index) => (
            <SwiperSlide key={index}>
              <SinglePredictionItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {swiperItems} */}
      </div>
    </>
  );
};

export default Prediction;

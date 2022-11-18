import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useConnect from '../../../../hooks/use-connect';
import Button from '../../../UI/button/Button';
import {
  ArrowSvg,
  CancelSvg,
  LaterSvg,
  LiveSvg,
  NextSvg,
  SmlArrowSvg,
} from '../../../svg';
import CornerDecor from '../../../UI/cornerDecor/CornerDecor';
import Image from 'next/image';

import styles from './SinglePredictionItem.module.css';

const SinglePredictionItem = ({ item }) => {

  const [activeBtns, setActiveBtns] = useState(null);
  const [activeBtnsDwn, setActiveBtnsDwn] = useState(null);
  const [upBtns, setUpBtns] = useState(false);
  const [downBtns, setDownBtns] = useState(false);

  const { handleWalletModal } = useConnect();
  const activebtns = useSelector(state => state.connect.activeBuyTicketsBtn);
  const dispatch = useDispatch();

  const activateBtns = (id) => {
    setActiveBtns(id);
  }
  
  const activateDwn = (id) => {
    setActiveBtnsDwn(id)
  }
  const changeUpBtns = () => {
    setUpBtns(!upBtns)
  }
  const changeDownBtns = () => {
    setDownBtns(!downBtns)
  }

  const ticketBtns = () => {
    dispatch({
      type: 'BUY_TICKETS_ACTIVE',
      payload: {
        activeBuyTicketsBtn: !activebtns,
      },
    });
  };

  return (
    <div className={`${styles.sliderMainConteinerExpierd}`}>
      <CornerDecor />
      {item.action === 'expired' && (
        
        <div className={styles.expierdContent}>
          <div className={styles.titleExpierd}>
            <div>
              {item.action === 'expired' && <CancelSvg />}
              <p>{item.action}</p>
            </div>
        <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
      </div>
          <div className={styles.upPriceExpierd}>
            <div>
              <SmlArrowSvg className={styles.priceUpSvg} />
              <p className={styles.up}>UP</p>
              {item.action === 'live' && <p className={styles.UpBackground}></p>}
            </div>
            <p className={styles.payOut}>{item.payOut}</p>
          </div>
            <div className={styles.lastPriceExpierd}>
                <h4>Last Price</h4>
                <div className={styles.mainPriceExpierd}>
                  <h2 className={styles.price}>{item.lastPrice}</h2>
                  <div className={styles.priceUpExpierd}>
                    <ArrowSvg className={styles.arrowSvg} />
                        <p>{item.upPrice}</p>
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
                    <p className={styles.wtf}  style={{background:"transparent"}}> DOWN</p>
              <SmlArrowSvg className={styles.priceDownSvg} />
                </div>
            </div>
        </div>
      )}
      {item.action === 'live' && (
        <>       
          <div className={styles.titleExpierd}>
            <div>
              {item.action === 'live' && <LiveSvg />}
              <p>{item.action}</p>
            </div>
        <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
      </div>
          <div className={styles.upPriceExpierd}>
            <div>
              <SmlArrowSvg className={styles.priceUpSvg} />
              <p className={styles.up}>UP</p>
              {item.action === 'live' && <p className={styles.UpBackground}></p>}
            </div>
            <p className={styles.payOut}>{item.payOut}</p>
          </div>
          <div className={styles.lastPrice}>
          <h4>Last Price</h4>
            <div>
              <div className={styles.blur}>
                <Image objectFit={"cover "} layout='fill' src={"/images/win/background/finishedBackground.png"} alt="blur" />
              </div>
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
                <p>{item.payDown}</p>
                <div className={styles.priceDownExpierd}>
                    <p className={styles.down}  style={{background:"transparent"}}> DOWN</p>
              <SmlArrowSvg className={styles.priceDownSvg} />
                </div>
            </div>          
        </>  
      )}
      {item.action === 'next' && (
        <>
        <div  className={`${activeBtns === item.id ? styles.containerOpacity : ''} ${activeBtnsDwn === item.id ? styles.containerOpacity : ''} `}> 
          <div className={styles.titleExpierd}>
            <div>
              {item.action === 'next' && <NextSvg />}
              <p>{item.action}</p>
            </div>
            <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
          </div>
                    <div className={styles.upPriceExpierd}>
            <div>
              <SmlArrowSvg className={styles.priceUpSvg} />
              <p className={styles.up}>UP</p>
            </div>
            <p className={styles.payOut}>{item.payOut}</p>
          </div>
          <div className={styles.buttonContent}>
            <div className={styles.prizePool}>
              <p>Prize Pool:</p>
              <p>{item.prizePool}</p>
            </div>
            <div className={styles.enterButton}>
              <p className={styles.enterUp}
                onClick={() => {
                  activateBtns(item.id);
                }} >
                Enter UP</p>
              <p className={styles.enterDown}
                onClick={() => {
                  activateDwn(item.id);
                }}                   
              >Enter DOWN</p>
            </div>
          </div>
           <div className={styles.priceDownContainer}>
                <p>{item.payDown}</p>
                <div className={styles.priceDownExpierd}>
                    <p className={styles.down}  style={{background:"transparent"}}> DOWN</p>
              <SmlArrowSvg className={styles.priceDownSvg} />
                </div>
          </div>
        </div>
                  {/* button up */}
          <div className={`${styles.btnsAction} ${activeBtns === item.id ? styles.btnsActionActive : ''}`} >
              <div>
                  <div className={styles.bottomBorder}>
                      <div className={styles.positionBt}>
                          <p onClick={() => {
                              activateBtns(null)
                          }}>
                              <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.0556 6.02637H1.45898" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                  <path d="M6.41602 1.36914C6.41602 1.36914 1.45898 3.94199 1.45898 5.95898C1.45898 7.97598 6.41602 9.63086 6.41602 9.63086" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                              
                          </p>
                          <p>Set Position</p>
                      </div>
                      <button  onClick={changeUpBtns} className={`${styles.upButton} ${upBtns ? styles.wtpakk : ''}`}>
                          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.60309 5.13895L5.0325 1.56836L1.46191 5.13895" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M5.0332 9.43211L5.0332 1.56836" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <p>{upBtns ? 'DOWN' : 'UP'}</p>
                      </button>
                  </div>
                  <div className={styles.commitSection}>
                      <div className={styles.commitText}>
                          <p>
                              Commit:
                          </p>
                          <p>
                              CMCX
                          </p>
                      </div>
                      <div>
                          <div className={styles.cmcxPrice}>
                              <input type="text" value="0.0" />
                          </div>
                          <div className={styles.range}>
                              <input className={styles.inputRange} type="range"  min="0" max="100" />
                          </div>
                          <div className={styles.bottomSection}>
                              <button>10%</button>
                              <button>25%</button>
                              <button>50%</button>
                              <button>75%</button>
                              <button>Max</button>
                          </div>
                          <div className={styles.connectWalletButon}>
                            <Button
                              onClick={() => {
                                handleWalletModal(true);
                              }}
                              title={'Connect Wallet'}
                              type={'red'}
                              customStyles={{
                                width: '100%',
                                padding: '7px 20px',
                                fontSize: '16px',
                                lineHeight: '22px',
                                marginTop: 'auto',
                              }}
                            />
                          </div>
                          <div className={styles.text}>
                              <p>
                                  You won’t be able to remove or change your position once you enter it.
                              </p>
                          </div>
                      </div> 
                  </div>
              </div>
          </div>
          {/* button down */}
          <div className={`${styles.btnsActionDwn} ${activeBtnsDwn === item.id ? styles.btnsActionActiveDwn : ''}`}>
          <div>
              <div className={styles.bottomBorder}>
                  <div className={styles.positionBt}>
                      <p onClick={() => {
                          setActiveBtnsDwn(null)
                      }}>
                          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.0556 6.02637H1.45898" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                              <path d="M6.41602 1.36914C6.41602 1.36914 1.45898 3.94199 1.45898 5.95898C1.45898 7.97598 6.41602 9.63086 6.41602 9.63086" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                      </p>
                      <p>Set Position</p>
                  </div>
                  <button onClick={changeDownBtns} className={`${styles.downButton} ${downBtns ? styles.wtpakk1 : ''}`}>
                      <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.966245 5.86105L4.53683 9.43164L8.10742 5.86105" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4.53711 1.56789L4.53711 9.43164" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p>{downBtns ? "UP" : "DOWN"  }</p>
                  </button>
              </div>
              <div className={styles.commitSection}>
                  <div className={styles.commitText}>
                      <p>
                          Commit:
                      </p>
                      <p>
                          CMCX
                      </p>
                  </div>
                  <div>
                      <div className={styles.cmcxPrice}>
                          <input type="text" value="0.0" />
                      </div>
                      <div className={styles.range}>
                          <input className={styles.inputRange} type="range"  min="0" max="100" />
                      </div>
                      <div className={styles.bottomSection}>
                          <button>10%</button>
                          <button>25%</button>
                          <button>50%</button>
                          <button>75%</button>
                          <button>Max</button>
                      </div>
                      <div className={styles.connectWalletButon}>
                            <Button
                              onClick={() => {
                                handleWalletModal(true);
                              }}
                              title={'Connect Wallet'}
                              type={'red'}
                              customStyles={{
                                width: '100%',
                                padding: '7px 20px',
                                fontSize: '16px',
                                lineHeight: '22px',
                                marginTop: 'auto',
                              }}
                            />
                          </div>
                      <div className={styles.text}>
                          <p>
                              You won’t be able to remove or change your position once you enter it.
                          </p>
                      </div>
                  </div> 
                  </div>
              </div>
            </div>
      </>
      )}
      {item.action === 'later' && (
        <>
          <div className={styles.titleExpierdLater}>
            <div>
                {item.action === 'later' && <LaterSvg />}
                <p>{item.action}</p>
            </div>
            <p className={styles.titlePBorderExpierd}>{item.numHashTag}</p>
          </div>
          <p className={styles.laterIcone}>
            <SmlArrowSvg className={styles.svgiconearrow} />
            UP
          </p>
          <div className={styles.laterContainer}>
            <p>Entry Starts</p>
            <span>~09:32</span>
          </div>
          <div className={styles.priceDownContainer}>
            <p>
              DOWN
              <SmlArrowSvg className={styles.svgiconearrow} />
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePredictionItem;

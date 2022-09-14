import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import CornerDecor from '../../UI/cornerDecor/CornerDecor';

import BuyTickets from './BuyTickets';
import styles from './Tickets.module.css';
import { VectorSvg } from '../../svg';
import Button from '../../UI/button/Button';

let ticketsData = [
  {
    id: '0',
    title: 'Match first 1',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '1',
    title: 'Match first 2',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '2',
    title: 'Match first 3',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '3',
    title: 'Match first 4',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '4',
    title: 'Match first 5',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '5',
    title: 'Match first 6',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '6',
    title: 'Match first 7',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
  {
    id: '7',
    title: 'Burn',
    priceCore: '156 CORE',
    price: '~$3.215',
  },
];

const Tickets = () => {
  const [details, setDetails] = useState(false);
  const activebtns = useSelector(state => state.activeBuyTicketsBtn);
  const dispatch = useDispatch();

  const handleClick = () => {
    setDetails(!details);
  };

  const ticketBtns = () => {
    dispatch({
      type: 'BUY_TICKETS_ACTIVE',
      payload: {
        activeBuyTicketsBtn: !activebtns,
      },
    });
  };
  return (
    <div className={styles.alignteItems}>
      <picture>
        <img
          className={styles.imgBlur}
          src={'/images/win/Rectangle.png'}
          alt=''
        />
      </picture>
      <h1 className={styles.title}>Get your tickets now!</h1>
      <div className={styles.time}>
        <span>1Day 35Minute</span>
        <p>until the draw</p>
      </div>
      <div className={styles.border}>
        <div className={styles.tab}>
          <CornerDecor />
          <div className={styles.day}>
            <h4>Next Draw</h4>
            <p>#490 | Draw: Apr 1, 2022, 4:00 PM</p>
          </div>
          <div className={styles.price}>
            <p>Prize Pot:</p>
            <div className={styles.pirceCore}>
              <h3>~$302,002</h3>
              <p>23.035 CORE</p>
            </div>
          </div>
          <div className={styles.buyTickets}>
            <p>Your Tickets</p>
            <Button
              title={'Buy Tickets'}
              type={'transparent'}
              onClick={() => {
                ticketBtns();
              }}
              customStyles={{
                padding: '10px 80px',
              }}
            />
          </div>
          <div
            className={`${styles.tabBorder} ${
              activebtns === true ? styles.containerOpacity : ''
            }`}
          >
            <BuyTickets />
          </div>
          <div className={styles.paragraph}>
            <p>
              Match the winning number in the same order to share prizes.
              Current prizes up for grabs:
            </p>
          </div>
          <div className={styles.list}>
            {details &&
              ticketsData.map(item => {
                return (
                  <>
                    <div className={styles.detailsList} key={item.id}>
                      <p className={styles.titlePar}>{item.title}</p>
                      <p>{item.priceCore}</p>
                      <p className={styles.priceCore}>{item.price}</p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className={styles.details}>
            <p onClick={handleClick}>
              {details === true ? 'Hide' : 'Details'}

              <VectorSvg
                className={`${styles.vectorSvg} ${
                  details ? styles.rotate : ''
                }`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

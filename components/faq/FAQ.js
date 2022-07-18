import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FAQ.module.css';
import Expand from '../UI/expand/Expand';

const FAQ = props => {
  const [answers, setAnswers] = useState(null);

  let FAQ = '';
  let content = '';

  let openFaq = id => {
    if (answers === id) {
      setAnswers(null);
    } else {
      setAnswers(id);
    }
  };
  if (props.type === 'overview') {
    FAQ = [
      {
        id: 0,
        question: 'When can I trade other NFT Collections?',
        answer: 'I sold an NFT, where’s my CMCX?',
      },
      {
        id: 1,
        question: 'xaixui?',
        answer:
          'Team ranks are calculated by the total combined volume of the top 500 members of each respective team.',
      },
      {
        id: 2,
        question: 'How can I list my NFT collection on the Market?',
        answer:
          'Team ranks are calculated by the total combined volume of the top 500 members of each respective team.',
      },
      {
        id: 3,
        question: 'What are the fees?',
        answer:
          'Team ranks are calculated by the total combined volume of the top 500 members of each respective team.',
      },
    ];
    content = (
      <div className={styles.Faq}>
        <Image
          className={styles.Faq__background}
          src={'../images/FAQ/background/bckgOfFAQ.png'}
          alt='background12'
          layout='fill'
        />
        <div className={`${styles.askedQuestions} font_30`}>
          {' '}
          Frequently Asked Questions
        </div>
        <div className={styles.Faq__inner}>
          {FAQ.map(item => {
            return (
              <Expand
                className={styles.expandWrap}
                key={item.id}
                onClick={() => {
                  openFaq(item.id);
                }}
              >
                <p
                  className={`${styles.Faq__item__question} 
                    font_20
                  ${
                    answers === item.id
                      ? styles.Faq__item__question__active
                      : ''
                  }`}
                >
                  {item.question}
                  <svg
                    className={`${styles.Faq__item__arrow} ${
                      answers === item.id ? styles.Faq__item_arrowActive : ''
                    }`}
                    width='15'
                    height='8'
                    viewBox='0 0 15 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                      stroke='white'
                      strokeWidth='2'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </p>
                <div
                  className={`${styles.Faq__item__answersWrap} ${
                    answers === item.id
                      ? styles.Faq__item__answersWrapActive
                      : ''
                  }`}
                >
                  <p className={styles.Faq__item__answer}>- {item.answer}</p>
                </div>
              </Expand>
            );
          })}
        </div>
      </div>
    );
  }

  if (props.type === 'auctionFAQ') {
    FAQ = [
      {
        question: 'Step 1: Submit application',
        answer:
          'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
        id: 0,
      },
      {
        question: 'Step 1: Submit application',
        answer:
          'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
        id: 1,
      },
      {
        question: 'Step 1: Submit application',
        answer:
          'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
        id: 2,
      },
      {
        question: 'Step 1: Submit application',
        answer:
          'Projects can submit an application to sponsor a yield farm and/or pool on PancakeSwap via the Application Form',
        id: 3,
      },
    ];
    content = (
      <div className={styles.auction__faqExpendContainer}>
        <div className={`${styles.askedQuestions} font_30`}>
          Frequently Asked Questions
        </div>
        <div className={styles.auctions__FaqExpendTitle}>
          <p className={`${styles.Faq__title} ${styles.font_30}`}>
            How does it work?
          </p>
          {FAQ.map(item => {
            return (
              <Expand
                className={styles.expandWrap}
                key={item.id}
                onClick={() => {
                  openFaq(item.id);
                }}
              >
                <p
                  className={`${styles.Faq__item__question} ${styles.font_20} ${
                    answers === item.id
                      ? styles.Faq__item__question__active
                      : ''
                  }`}
                >
                  {item.question}
                  <svg
                    className={`${styles.Faq__item__arrow} ${
                      answers === item.id ? styles.Faq__item_arrowActive : ''
                    }`}
                    width='15'
                    height='8'
                    viewBox='0 0 15 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.2788 1.0918L8.33941 6.03119C7.75608 6.61452 6.80154 6.61452 6.2182 6.03119L1.27881 1.0918'
                      stroke='white'
                      strokeWidth='2'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </p>
                <div
                  className={`${styles.Faq__item__answersWrap} ${
                    answers === item.id
                      ? styles.Faq__item__answersWrapActive
                      : ''
                  }`}
                >
                  <p className={styles.Faq__item__answer}>- {item.answer}</p>
                </div>
              </Expand>
            );
          })}
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default FAQ;

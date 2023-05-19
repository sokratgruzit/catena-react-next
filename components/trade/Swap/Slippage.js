import React from 'react'

import CornerDecor from '../../UI/cornerDecor/CornerDecor'

import styles from './SwapBox.module.css'
// import "./Setting.css";
function Slippage({ setSlippage, setIsOpen }) {
  const NumericOnly = e => {
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0, preval.length - 1)
  }
  return (
    <div className={`${styles.swapContainerModal} ${styles.swapContainerActive}`}>
      <CornerDecor />
      <div className={styles.swapContainerModalTtl}>
        <svg
          width='14'
          height='10'
          viewBox='0 0 14 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => setIsOpen(false)}
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M-2.18557e-07 5C-2.28619e-07 4.76981 0.0962057 4.54905 0.267454 4.38628L4.61474 0.254214C4.97134 -0.084737 5.54951 -0.0847371 5.90612 0.254214C6.26272 0.593164 6.26272 1.14271 5.90612 1.48166L2.20452 5L5.90612 8.51834C6.26272 8.85729 6.26272 9.40684 5.90612 9.74579C5.54951 10.0847 4.97134 10.0847 4.61474 9.74579L0.267453 5.61372C0.0962058 5.45095 -2.08495e-07 5.23019 -2.18557e-07 5Z'
            fill='white'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.121094 5.00023C0.121094 4.52088 0.529922 4.13229 1.03424 4.13229L13.0877 4.13229C13.5921 4.13229 14.0009 4.52088 14.0009 5.00023C14.0009 5.47957 13.5921 5.86816 13.0877 5.86816L1.03424 5.86816C0.529922 5.86816 0.121094 5.47958 0.121094 5.00023Z'
            fill='white'
          />
        </svg>
        Set Slippage
      </div>
      <input
        type='text'
        className={styles.swapContainerModalInput}
        placeholder='2%'
        min={1}
        max={49}
        onChange={e => setSlippage(e.target.value)}
      />
      <div className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBlue}`}>Set Custom</div>
      {/*<div className={`${styles.swapContainerModalBtn} ${styles.swapContainerModalBtnBordered}`}>*/}
      {/*    Set Auto*/}
      {/*</div>*/}
    </div>
  )
}

export default Slippage

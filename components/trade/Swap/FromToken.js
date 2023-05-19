// import "./token/token.css";
import React from 'react'
import Web3 from 'web3'

import { tokenList } from './token/token'
import WBNB from '../../abi/WBNB.json'
import CornerDecor from '../../UI/cornerDecor/CornerDecor'

import styles from './SwapBox.module.css'

export default function SelectToken({
  setIsOpen,
  tokenInfo,
  setTokenInfo,
  setFromToken,
  fromAmount,
  quateSwap,
  getTokenBalance,
}) {
  const searchToken = async search => {
    var token = tokenList(search)

    if (token.length === 0) {
      const web3 = new Web3('https://bsc-dataseed1.binance.org/')
      var isAddress = web3.utils.isAddress(search)

      if (isAddress) {
        const contract = new web3.eth.Contract(WBNB, search)
        const name = await contract.methods.name().call()
        const symbol = await contract.methods.symbol().call()
        const decimals = await contract.methods.decimals().call()

        var tokenInfo = [
          {
            name: name,
            address: search,
            symbol: symbol,
            decimals: decimals,
            logo: '/images/information.png',
          },
        ]

        setTokenInfo(tokenInfo)
      } else {
        setTokenInfo(tokenList(search))
      }
    } else {
      setTokenInfo(tokenList(search))
    }
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
        Select a token
      </div>
      <input
        type='text'
        placeholder={'Search name or paste token address'}
        className={styles.swapContainerModalInput}
        onChange={e => searchToken(e.target.value)}
      />
      <div className={styles.swapContainerTokens}>
        {tokenInfo.map((row, index) => (
          <div
            className={styles.swapContainerToken}
            key={index}
            onClick={e => {
              setFromToken(row)
              getTokenBalance(row.address, 'From')
              setIsOpen(false)
              setTimeout(function () {
                e.target.value = fromAmount
                quateSwap(e)
              }, 1000)
            }}
          >
            <div className={styles.swapSelectBtnTop}>
              <img src={row.logo} alt='icon' />
              {row.name}
            </div>
            <span>{row.symbol}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

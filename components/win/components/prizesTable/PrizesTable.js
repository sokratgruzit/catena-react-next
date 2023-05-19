import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import styles from './PrizesTable.module.css'

let prizesData = [
  {
    id: 0,
    rankTeam: '1',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$13,034',
    achievment: '+2,500',
    nft: '/images/win/check.png',
  },
  {
    id: 1,
    rankTeam: '2-10',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$30,034',
    achievment: '+1,250',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 2,
    rankTeam: '11 - 110',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$25,200',
    achievment: '+1,000',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 3,
    rankTeam: '111 - 500',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$30,034',
    achievment: '+1,000',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 4,
    rankTeam: '500+',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$16,800',
    achievment: '+850',
    nft: '/images/win/checkGrey.png',
  },
]
let prizesData2 = [
  {
    id: 0,
    rankTeam: '1',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$5,400',
    achievment: '+2,500',
    nft: '/images/win/check.png',
  },
  {
    id: 1,
    rankTeam: '2-10',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$12,600',
    achievment: '+1,000',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 2,
    rankTeam: '11 - 110',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$10,800',
    achievment: '+850',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 3,
    rankTeam: '111 - 500',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$7,200',
    achievment: '+500',
    nft: '/images/win/checkGrey.png',
  },
  ,
  {
    id: 4,
    rankTeam: '500+',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$0',
    achievment: '+250',
    nft: '/images/win/checkGrey.png',
  },
]
let prizesData3 = [
  {
    id: 0,
    rankTeam: '1',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$1,800',
    achievment: '+2,100',
    nft: '/images/win/check.png',
  },
  {
    id: 1,
    rankTeam: '2-10',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$4,200',
    achievment: '+850',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 2,
    rankTeam: '11 - 110',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$3,600',
    achievment: '+500',
    nft: '/images/win/check.png',
  },
  ,
  {
    id: 3,
    rankTeam: '111 - 500',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$2,400',
    achievment: '+250',
    nft: '/images/win/checkGrey.png',
  },
  ,
  {
    id: 4,
    rankTeam: '500+',
    tierImg: '/images/win/prizeMedal.png',
    tokenPrize: '$0',
    achievment: '+100',
    nft: '/images/win/checkGrey.png',
  },
]

const PrizesTable = ({ activeMenuItem }) => {
  const [tableData, setTableData] = useState(prizesData)
  useEffect(() => {
    //fetch data by state
    if (activeMenuItem === '#1 team') setTableData(prizesData)
    if (activeMenuItem === '#2 team') setTableData(prizesData2)
    if (activeMenuItem === '#3 team') setTableData(prizesData3)
  }, [activeMenuItem])
  return (
    <div>
      {tableData.map((item, index) => (
        <div key={index} className={styles.teamPrizesRank}>
          <div className={styles.tabListPosition}>{item.rankTeam}</div>
          <div className={styles.medal}>
            <Image layout='fill' objectFit={'contain'} src={item.tierImg} alt='Medal' className={styles.medal} />
          </div>
          <div>{item.tokenPrize}</div>

          <div>{item.achievment}</div>
          <div className={styles.check}>
            <Image layout='fill' objectFit={'contain'} src={item.nft} alt='Medal' className={styles.medal} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PrizesTable

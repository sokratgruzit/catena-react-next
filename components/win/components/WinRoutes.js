import { useRouter } from 'next/router'
import React, { useState } from 'react'

import CornerDecor from '../../UI/cornerDecor/CornerDecor'
import TabFilter from '../../UI/filters/TabFilter'

import styles from './WinRoutes.module.css'

let tabsData = [
  {
    id: 0,
    label: 'Trading Compatition',
  },
  {
    id: 1,
    label: 'Prediction',
  },
  {
    id: 2,
    label: 'Lottery',
  },
]

const WinRoutes = () => {
  const router = useRouter()
  // const [activeMenuItem, setActiveMenuItem] = useState('Trading Compatition');
  const getCurrentLocation = loc => {
    let returnStatement = ''
    if (loc === '/win/competition') returnStatement = 'Trading Compatition'
    if (loc === '/win/prediction') returnStatement = 'Prediction'
    if (loc === '/win/lottery') returnStatement = 'Lottery'
    return returnStatement
  }
  const [activeMenuItem, setActiveMenuItem] = useState(getCurrentLocation(router.pathname))

  const changeTabHendler = status => {
    let route = '/win/competition'

    if (status === 'Prediction') {
      route = '/win/prediction'
    } else if (status === 'Lottery') {
      route = '/win/lottery'
    }
    router.push(route)

    setActiveMenuItem(status)
  }
  return (
    <div className={styles.tab}>
      <CornerDecor />
      <TabFilter
        onClick={changeTabHendler}
        activeMenu={activeMenuItem}
        data={tabsData}
        css={{
          wrap: styles.Competition__filterWrap,
          filter: styles.Activity__filter,
          active: styles.Competition__filterActive,
          item: styles.Competition__filter__item,
        }}
      />
    </div>
  )
}

export default WinRoutes

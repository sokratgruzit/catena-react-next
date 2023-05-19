import { useRouter } from 'next/router'
import React from 'react'

import { StarSvg } from '../../svg/index'
import InfoRoutes from '../components/InfoRoutes/InfoRoutes'
import PoolsTable from '../components/InfoTables/PoolsTable'

import styles from '../InfoPages.module.css'

const InfoPools = () => {
  const router = useRouter()
  return (
    <div className={styles.section}>
      <div className={styles.routesWrapper}>
        <div className={styles.space}></div>
        <InfoRoutes />
        <div className={styles.starWrapper}>
          <StarSvg className={styles.starSVG} onClick={() => router.push(`/info/pools/watchlist`)} />
          <div className={styles.favCount}>3</div>
        </div>
      </div>
      <h2 className={`${styles.tokensTitle} font_30`}>All Pools</h2>
      <PoolsTable />
    </div>
  )
}

export default InfoPools

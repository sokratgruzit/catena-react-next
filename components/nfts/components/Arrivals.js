import Link from 'next/link'

//import FAQ from '../../faq/FAQ';
import ListItemCard from '../../UI/listItem/ListItemCard'

import styles from './Arrivals.module.css'

const Arrivals = props => {
  return (
    <div className={`container`}>
      <div className={styles.Arrivals}>
        <div className={styles.Arrivals__item}>
          <p className={`font_30`}>Newest Arrivals</p>
          <div className={styles.Arrivals__btn}>
            <Link href={`/nfts/activity`}>
              <p className={styles.Arrivals__btnTxt}>View All</p>
            </Link>
            <svg
              className={styles.Arrivals__btn__svg}
              width='14'
              height='11'
              viewBox='0 0 14 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.567 5.28027C13.567 5.05008 13.4756 4.82932 13.3128 4.66655L9.18074 0.534488C8.84179 0.195536 8.29224 0.195536 7.95329 0.534487C7.61434 0.873438 7.61434 1.42298 7.95329 1.76193L11.4716 5.28027L7.95329 8.79861C7.61434 9.13756 7.61434 9.68711 7.95329 10.0261C8.29224 10.365 8.84179 10.365 9.18074 10.0261L13.3128 5.894C13.4756 5.73123 13.567 5.51046 13.567 5.28027Z'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.4528 5.2805C13.4528 4.80115 13.0642 4.41256 12.5848 4.41256L1.12805 4.41256C0.6487 4.41256 0.26011 4.80115 0.26011 5.2805C0.26011 5.75985 0.6487 6.14844 1.12805 6.14844L12.5848 6.14844C13.0642 6.14844 13.4528 5.75985 13.4528 5.2805Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <div className={styles.Arrivals__itemsList}>
          {props.arrivals.map(item => {
            return <ListItemCard key={item.id} data={item} type={'nft_arrivals'} />
          })}
        </div>
        {/*<FAQ />*/}
        <div className={styles.Arrivals__applyTo}>
          <Link href={`/wiki/apply-to-nft-market`}>
            <div className={styles.Arrivals__newWindow}>
              <p>Apply to NFT Market!</p>
              <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M13.5817 1.47761C13.8442 1.73509 13.8483 2.15661 13.5908 2.41909L8.49551 7.61316C8.23803 7.87564 7.81651 7.87969 7.55403 7.6222C7.29155 7.36472 7.2875 6.9432 7.54499 6.68072L12.6403 1.48665C12.8977 1.22417 13.3193 1.22012 13.5817 1.47761Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9.96466 1.44603C9.96466 1.07834 10.2627 0.780273 10.6304 0.780273H13.613C13.9807 0.780273 14.2788 1.07834 14.2788 1.44603V4.48647C14.2788 4.85416 13.9807 5.15223 13.613 5.15223C13.2453 5.15223 12.9472 4.85416 12.9472 4.48647V2.11179H10.6304C10.2627 2.11179 9.96466 1.81372 9.96466 1.44603Z'
                  fill='#0500FF'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.71988 2.00913C2.60461 1.10724 3.91318 0.780273 5.53503 0.780273H6.77778C7.14547 0.780273 7.44354 1.07834 7.44354 1.44603C7.44354 1.81372 7.14547 2.11179 6.77778 2.11179H5.53503C4.05002 2.11179 3.18377 2.41825 2.67041 2.94157C2.15393 3.46806 1.85117 4.35944 1.85117 5.88V9.68055C1.85117 11.2011 2.15393 12.0925 2.67041 12.619C3.18377 13.1423 4.05002 13.4488 5.53503 13.4488H9.26328C10.7483 13.4488 11.6145 13.1423 12.1279 12.619C12.6444 12.0925 12.9471 11.2011 12.9471 9.68055V8.4137C12.9471 8.04601 13.2452 7.74794 13.6129 7.74794C13.9806 7.74794 14.2787 8.04601 14.2787 8.4137V9.68055C14.2787 11.3271 13.96 12.6527 13.0784 13.5514C12.1937 14.4533 10.8851 14.7803 9.26328 14.7803H5.53503C3.91318 14.7803 2.60461 14.4533 1.71988 13.5514C0.838271 12.6527 0.519653 11.3271 0.519653 9.68055V5.88C0.519653 4.23344 0.838271 2.90784 1.71988 2.00913Z'
                  fill='#0500FF'
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Arrivals

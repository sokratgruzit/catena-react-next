import styles from './tokenomics.module.css';

function TokenomicsItem() {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottom__descriptionInner}>
        <div className={styles.bottom__description}>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Name</div>
              <div>CATENA Multi-Chain — Cryptographic Object Resources Engine</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Decimals</div>
              <div className={styles.bottom__descriptionText}>18</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Native Crypto Symbol</div>
              <div className={styles.bottom__descriptionText}>Catena</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Initial Price</div>
              <div className={styles.bottom__descriptionText}>0.005 USDT</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Consensus Protocol</div>
              <div className={styles.bottom__descriptionText}>Practical Proof of Stake</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Current Price</div>
              <div className={styles.bottom__descriptionText}>0.00144 USDT</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Total Supply (Current)</div>
              <div className={styles.bottom__descriptionText}>18,590,000,000 CMCX</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Total Supply (Current)</div>
              <div className={styles.bottom__descriptionText}>18,590,000,000 CMCX</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Total Supply (Genesis)</div>
              <div className={styles.bottom__descriptionText}>20,000,000,000 CMCX</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Circulating Supply (Genesis)</div>
              <div className={styles.bottom__descriptionText}>8,000,000,000 CMCX</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Circulating Supply (Current)</div>
              <div className={styles.bottom__descriptionText}>8,000,000,000 CMCX</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Role of Token</div>
              <div className={styles.bottom__descriptionText}>Utility</div>
            </div>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Official Website</div>
              <div className={styles.bottom__descriptionText}>catenamultichain.com</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Pre-mined Reserve</div>
              <div className={styles.bottom__descriptionText}>6,000,000,000 CMCX</div>
            </div>
          </div>
          <div className={styles.bottom__descriptionFloor}>
            <div className={styles.bottom__descriptionItem}>
              <div className={styles.bottom__descriptionTtl}>Protocols</div>
              <div className={styles.bottom__descriptionText}>1,2,3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenomicsItem;

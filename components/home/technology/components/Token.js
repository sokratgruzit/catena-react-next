import React from 'react';

import styles from '../styles/Token.module.css';

export default function Token() {
  const tokenArray = [
    {
      theCmcxToken: 'The CMCX Token',
      theCmcxTokenText:
        'The CMCX token is native to the CORE platform and allows users to transact with other users on the blockchain, as well as pay for all of the utility fees in the ecosystem. It can be used for governance, staking, transactions, smart contracts and validator rewards on the platform.',
    },
  ];
  return (
    <div>
      {tokenArray.map((item, index) => (
        <div key={index} data-aos='fade-up' className={`${styles.technoDescriptionBottom} pB-160 pT-160`}>
          <h2 className='font-51'>{item.theCmcxToken}</h2>
          <div className={styles.technoDescriptionBottominner}>
            <div className={styles.technoDescriptionBottomText}>{item.theCmcxTokenText}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

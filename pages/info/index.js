import React from 'react';
import Image from 'next/image';
import InfoOverview from '../../components/Info/InfoOverview/InfoOverview';

import BackgroundImg from '../../public/images/Info/background/background.png';

import styles from '../../components/Info/InfoPages.module.css';

const index = () => {
  return (
    <div>
      <div className={styles.backgroundMain}>
        <Image
          layout='responsive'
          objectFit='cover'
          quality={100}
          src={BackgroundImg}
          alt='background'
        />
      </div>
      <InfoOverview />
    </div>
  );
};

export default index;

// index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

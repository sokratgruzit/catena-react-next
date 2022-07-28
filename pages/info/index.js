import React from 'react';
import Image from 'next/image';
import InfoOverview from '../../components/Info/InfoOverview/InfoOverview';

import BackgroundImg from '../../public/images/Info/background/background.png';
import smokeBackground from '../../public/images/Info/background/smokeBackground.png';

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
      <div className={styles.gradient}>
        <Image
          src={smokeBackground}
          layout='responsive'
          objectFit='cover'
          alt='shit'
          quality={100}
        />
      </div>
    </div>
  );
};

export default index;

// export async function getStaticProps() {

//   return {
//     props: {
//       test: 'nothing much',
//     },
//   };
// }

// index.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

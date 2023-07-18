// import Link from 'next/link';
// import React from 'react';
// import "./CareersCatena.module.css"

// const CareersCatena = () => {
//   return (
//     <div className="container">
//       <div className="main-container__description">
//         <div className='left'>
//           <h1>
//             <span>Careers</span>
//             <div className='ttl_row'>
//               <span>at</span>
//               <span className='ttl_red'>CATENA</span>
//             </div>
//           </h1>
//           <div className='open-positions__btn-container'>
//             <Link href={'open-position'} className='open-positions__btn'>
//               Open positions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareersCatena;

import Link from 'next/link';
import React from 'react';

import styles from './CareersCatena.module.css';

const CareersCatena = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer__description}>
        <div className={styles.left}>
          <h1>
            <span>Careers</span>
            <div className={styles.ttl_row}>
              <span>at</span>
              <span className={styles.ttl_red}>CATENA</span>
            </div>
          </h1>
          <div className={styles.openPositions__btnContainer}>
            <Link href={'open-position'}>
              <div className={styles.openPositions__btn}>Open positions</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersCatena;

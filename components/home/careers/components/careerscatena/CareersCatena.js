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

import React from 'react';

import styles from './CareersCatena.module.css';

const CareersCatena = () => {
  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.hdisplay} style={{ color: '#162029', marginLeft: '5px' }}>
          Careers at
          <span className={styles.ttl_red}>CATENA</span>
        </span>
      </h1>
    </div>
  );
};

export default CareersCatena;

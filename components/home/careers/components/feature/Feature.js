// import { Button } from '@catena-network/catena-ui-module';
// import Link from 'next/link';

// import styles from './Feature.module.css';

// import { useState } from 'react';


// const [copiedLink, setCopiedLink] = useState('');

// const handleCopy = (link) => {
//   setCopiedLink(link);

//   navigator.clipboard.writeText(link)
//     .then(() => {
//       console.log('Link copied!');
//     })
//     .catch((error) => {
//       console.error('Failed to copy link:', error);
//     });
// };


// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return {
//     props: {
//       featureLinkList: data,
//       title: "Feature Title"
//     }
//   };
// };

// const Feature = ({ featureLinkList, title }) => {
//   if (!featureLinkList) {
//     return null;
//   }

//   return (
//     <div className={`${styles.openPositionsContainer}`}>
//       <h2 className='font-51'>{title}</h2>
//       <div className={`${styles.openPositionsList}`}>
//         {featureLinkList.map((item) => (
//           <div className='open-positions__list-item' key={item.id}>
//             <Link href={`/home/careers/${item.id}`} key={item.id}>
//               <a>{item.title}</a>
//             </Link>
//             <svg
//
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               onClick={() => handleCopy(`https://example.com/${item.id}`)}
//             >
//               <path data-v-aaff1626="" d="M17.3198 2.74025L17.2598 2.68025C15.6998 1.12025 13.1398 1.12025 11.5798 2.68025L7.95977 6.30025C6.39977 7.86025 6.39977 10.4203 7.95977 11.9803L8.01976 12.0403C8.15977 12.1803 8.27977 12.2803 8.43977 12.4003L9.75976 11.0803C9.59976 10.9803 9.45976 10.8803 9.31977 10.7403L9.25977 10.6803C8.41977 9.84025 8.41977 8.46025 9.25977 7.60025L12.8798 3.98025C13.7198 3.14025 15.0998 3.14025 15.9598 3.98025L16.0198 4.04025C16.8598 4.88025 16.8598 6.26025 16.0198 7.12025L14.3798 8.76025C14.6598 9.46025 14.7998 10.2203 14.7798 10.9603L17.3198 8.42025C18.8998 6.86025 18.8998 4.30025 17.3198 2.74025ZM11.9798 7.96025C11.8398 7.82025 11.7198 7.72025 11.5598 7.60025L10.2398 8.92025C10.3998 9.02025 10.5398 9.12025 10.6798 9.26025L10.7398 9.32025C11.5798 10.1603 11.5798 11.5403 10.7398 12.4003L7.11977 16.0203C6.27977 16.8603 4.89977 16.8603 4.03977 16.0203L3.97977 15.9603C3.13977 15.1203 3.13977 13.7403 3.97977 12.8803L5.61977 11.2403C5.33977 10.5403 5.19977 9.78026 5.21977 9.04026L2.67977 11.5803C1.11977 13.1403 1.11977 15.7003 2.67977 17.2603L2.73977 17.3203C4.29977 18.8803 6.85977 18.8803 8.41976 17.3203L12.0398 13.7003C13.5998 12.1403 13.5998 9.58025 12.0398 8.02025L11.9798 7.96025Z"
//                 fill="white">
//               </path>
//             </svg>
//           </div>
//         ))}
//       </div>
//       <Button
//         label={'Button'}
//         size={'btn-lg'}
//         type={'btn-primary'}
//         arrow={'arrow-right'}
//         element={'button'}
//         disabled={true}
//         onClick={() => console.log(prevState => !prevState)}
//       />
//     </div>
//   );
// };

// export default Feature;



import { useState } from 'react';

import { Button } from '@catena-network/catena-ui-module';
import Link from 'next/link';

import styles from './Feature.module.css';

const Feature = ({ featureLinkList, title }) => {
  const [copiedLink, setCopiedLink] = useState('');

  const handleCopy = (link) => {
    setCopiedLink(link);

    navigator.clipboard.writeText(link)
      .then(() => {
        console.log('Link copied!');
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
      });
  };

  if (!featureLinkList) {
    return null;
  }

  return (
    <div className={`${styles.openPositionsContainer}`}>
      <h2 className='font-51'>{title}</h2>
      <div className={`${styles.openPositionsList}`}>
        {featureLinkList.map((item) => (
          <div className='open-positions__list-item' key={item.id}>
            <Link href={`/home/careers/${item.id}`} key={item.id}>
              {item.title}
            </Link>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleCopy(`http://localhost:3000/home/careers/${item.id}`)}
            >
              <path

                d="M17.3198 2.74025L17.2598 2.68025C15.6998 1.12025 13.1398 1.12025 11.5798 2.68025L7.95977 6.30025C6.39977 7.86025 6.39977 10.4203 7.95977 11.9803L8.01976 12.0403C8.15977 12.1803 8.27977 12.2803 8.43977 12.4003L9.75976 11.0803C9.59976 10.9803 9.45976 10.8803 9.31977 10.7403L9.25977 10.6803C8.41977 9.84025 8.41977 8.46025 9.25977 7.60025L12.8798 3.98025C13.7198 3.14025 15.0998 3.14025 15.9598 3.98025L16.0198 4.04025C16.8598 4.88025 16.8598 6.26025 16.0198 7.12025L14.3798 8.76025C14.6598 9.46025 14.7998 10.2203 14.7798 10.9603L17.3198 8.42025C18.8998 6.86025 18.8998 4.30025 17.3198 2.74025ZM11.9798 7.96025C11.8398 7.82025 11.7198 7.72025 11.5598 7.60025L10.2398 8.92025C10.3998 9.02025 10.5398 9.12025 10.6798 9.26025L10.7398 9.32025C11.5798 10.1603 11.5798 11.5403 10.7398 12.4003L7.11977 16.0203C6.27977 16.8603 4.89977 16.8603 4.03977 16.0203L3.97977 15.9603C3.13977 15.1203 3.13977 13.7403 3.97977 12.8803L5.61977 11.2403C5.33977 10.5403 5.19977 9.78026 5.21977 9.04026L2.67977 11.5803C1.11977 13.1403 1.11977 15.7003 2.67977 17.2603L2.73977 17.3203C4.29977 18.8803 6.85977 18.8803 8.41976 17.3203L12.0398 13.7003C13.5998 12.1403 13.5998 9.58025 12.0398 8.02025L11.9798 7.96025Z"
                fill="white"
              />
            </svg>
          </div>
        ))}
      </div>
      <Button
        label={'Button'}
        size={'btn-lg'}
        type={'btn-primary'}
        arrow={'arrow-right'}
        element={'button'}
        disabled={true}
        onClick={() => console.log(prevState => !prevState)}
      />
    </div>
  );
};

export default Feature;


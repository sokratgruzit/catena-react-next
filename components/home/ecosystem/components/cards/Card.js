import { Button } from '@catena-network/catena-ui-module';
import Image from 'next/image';

import styles from './Card.module.css';
import Link from 'next/link';

const Card = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src='/Mask Group.png' width={606} height={400} alt='Picture of the author' />
        <div className={styles.title}>Join the CORE Ecosystem Now</div>
        <div className={styles.button}>
        <Link href="/home/yourVoice">
            <Button
              label={'explore'}
              size={'btn-lg'}
              type={'btn-primary'}
              element={'button'}
              customStyles={{
                margin: '0',
                width: '100%',
                backgroundColor: '#FF6969',
              }}
            // onClick={() => handleSubmitClick(inputs)}
            />
          </Link>
        </div>
      </div>
      <div className={styles.card}>
        <Image src='/Mask Group (2).png' width={436} height={400} alt='Picture of the author' />
        <div className={styles.title}>Submit your project</div>
        <div className={styles.button}>
        <Link href="/home/yourVoice">
          <Button
            label={'explore'}
            size={'btn-lg'}
            type={'btn-primary'}
            element={'button'}
            customStyles={{
              margin: '0',
              width: '100%',
              backgroundColor: '#FF6969',
            }}
          // onClick={() => handleSubmitClick(inputs)}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Link from 'next/link';
import Image from 'next/image';

import Button from '../../../UI/button/Button';

import styles from './MainContainer.module.css';
import { ProposalSvg } from '../../../svg';

const MainContainer = () => {
  return (
    <div className='container'>
      <div className={styles.mainContainerBg}>
        <Image
          layout='fill'
          objectFit='contain'
          src={'/images/voting/main-bg.png'}
          quality={100}
          alt=''
        />
      </div>
      <div className={styles.inner}>
        <div className={styles.leftContainer}>
          <h1>Voting</h1>
          <p>
            Have your say in the future of the <a href='##'>Core</a> Ecosystem
          </p>
          <Link href={'/voting/proposal/create'}>
            <a>
              <Button
                title={
                  <>
                    <ProposalSvg className={styles.proposalSvg} />
                    Make a Proposal
                  </>
                }
                type={'blue__border'}
                className={styles.proposalButton}
              />
            </a>
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.whiteBall}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/voting/whiteBall.png'}
              quality={100}
              alt=''
            />
          </div>
          <div className={styles.group}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/voting/Group.png'}
              quality={100}
              alt=''
            />
          </div>
          <div className={styles.blueBall}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/voting/blue-circle.png'}
              quality={100}
              alt=''
            />
          </div>
          <div className={styles.rocket}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/voting/rocket.png'}
              quality={100}
              alt=''
            />
          </div>
          <div className={styles.astro}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/images/voting/astro.png'}
              quality={100}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

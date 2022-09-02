import Link from 'next/link';
import { ProposalSvg } from '../../../svg';
import Button from '../../../UI/button/Button';

import styles from './GetSuggestion.module.css';

const GetSuggestion = () => {
  return (
    <div className={`container ${styles.getSuggestContainer}`}>
      <div className={styles.getSuggestInner}>
        <h1 className='font_20'>Get a Suggestion?</h1>
        <p className='font_13'>
          Community proposals are a great way to see how the community feels
          about your ideas.
        </p>
        <p className='font_13'>
          They won&#39;t necessarily be implemented if the community votes
          successful, but suggestions with a lot of community support may be
          made into Core proposals.
        </p>
        <Link href={'/voting/proposal/create'}>
          <a>
            <Button
              title={
                <>
                  <ProposalSvg /> Make a Proposal
                </>
              }
              type={'blue'}
              className={styles.makeProposalButton}
            />
          </a>
        </Link>
        <picture>
          <img
            className={styles.chatCloud}
            src='images/voting/chatCloud.png'
            alt='cloud'
          ></img>
        </picture>
        <picture>
          <img
            className={styles.stars}
            src='/images/voting/stars.png'
            alt='stars'
          ></img>
        </picture>
      </div>
    </div>
  );
};

export default GetSuggestion;

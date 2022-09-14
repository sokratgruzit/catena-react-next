import React from 'react';
import Expand from '../../UI/expand/Expand';
import Question from './questionRows/Question';

import styles from './CommunityAuctionsFAQ.module.css';

const CommunityAuctionsFAQ = () => {
  return (
    <div className={styles.faq}>
      <Expand
        expandContent={
          <div>
            <p>
              Projects can submit an application to sponsor a yield farm and/or
              pool on PancakeSwap via the Application Form
            </p>
          </div>
        }
        onChildClick={true}
        className={styles.borderBottom}
      >
        <Question title={'Step 1: Submit application'} />
      </Expand>
      <Expand
        expandContent={
          <div>
            <p>The CORE team will try to respond within a week.</p>
            <ol>
              <li>
                {' '}
                Community Farm qualifiers will be asked to provide the address
                of the wallet which you’ll use for bidding CAKE in the auction.
              </li>
              <li>
                Core Farm/Pool qualifiers will receive further directions
                separately.
              </li>
            </ol>
          </div>
        }
        onChildClick={true}
        className={styles.borderBottom}
      >
        <Question title={'Step 2: Submit application'} />
      </Expand>
      <Expand
        expandContent={
          <div>
            <p>
              During the auction period, if you connect your project’s
              whitelisted wallet to the Auction page, you’ll see a “Place Bid”
              button during when the auction is live.
            </p>
            <p>
              You can then commit CAKE to bid during the auction, competing
              against other project for one of the available farms.
            </p>
          </div>
        }
        onChildClick={true}
        className={styles.borderBottom}
      >
        <Question title={'Step 3: During the auction'} />
      </Expand>
      <Expand
        expandContent={
          <div>
            <p>
              If your bid was not successful, you can reclaim your CAKE on this
              page.
            </p>
            <p>
              If your bid was successful, your farm will begin at the specified
              time. The CAKE you bid will not be returned to you and will be
              added to our weekly CAKE burn.
            </p>
            <p>
              So long as you are whitelisted, you’ll be able to participate in
              each new auction.
            </p>
            <p>
              If two or more projects bid the exact same CAKE amount and are
              contending for a spot in the winning bidders, their bids may be
              invalidated.
            </p>
          </div>
        }
        onChildClick={true}
      >
        <Question title={'Step 4: After the auction'} />
      </Expand>
    </div>
  );
};

export default CommunityAuctionsFAQ;

import styles from './Tokenomics.module.css';

function EventDetails() {
  let data = [
    {
      teaser: 'Pre-Seed',
      text: 'Starts on February 20 2021 2pm, GMT Ends on February 22 2021 2pm, GMT',
    },
    {
      teaser: 'Founders Round',
      text: 'Starts on February 23 2021 2:00pm, GMT Ends on March 09 2021 2:00pm, GMT (*or whenever total allocation is claimed',
    },
    {
      teaser: 'Seed Round — 1,000,000,000',
      text: 'Starts on March 21 2021 2:00pm, GMT Ends on March 29 2021 2:00pm, GMT (*or whenever total allocation is claimed)',
    },
    {
      teaser: 'Pre-IEO: 1,000,000,000',
      text: 'Starts on April 07 2021 2:00pm, GMT Ends on April 24 2021 2:00pm, GMT',
    },
  ];

  return (
    <div className={`${styles.pt64} ${styles.flex} ${styles.responsive_flex} ${styles.alignItemsCenter}`}>
      <div className={`${styles.left_bar}`}>
        <h2 className={` font_51 ttl `}>Token Distribution Event Details</h2>
        <div>
          <div className={`${styles.flex} ${styles.icon_wrap} ${styles.alignItemsCenter}`}>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z'
                fill='#A6D0DD'
                stroke='#162029'
              />
              <line x1='10' y1='9' x2='10' y2='15' stroke='#162029' strokeWidth='2' />
              <line x1='10' y1='5' x2='10' y2='7' stroke='#162029' strokeWidth='2' />
            </svg>
            <p>IEO Will start May 1st 2021</p>
          </div>
          <p className={`${styles.muted_text}`}>(*or sooner if Seed Round total allocation claimed).</p>
        </div>
      </div>
      <div className='container_bordered-child'>
        <div className={`${styles.eventDetails_textWrap}`}>
          {data?.map((item, i) => {
            return (
              <div key={i}>
                <p className={`${styles.orange} ${styles.events_teaser} ttl `}>{item.teaser}</p>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

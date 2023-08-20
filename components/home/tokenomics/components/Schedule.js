import styles from './Tokenomics.module.css';

function Schedule() {
  let data = [
    {
      teaser: '(TGE Event) Pre-Seed Round',
      text: '1,000,000,000',
    },
    {
      teaser: 'Pre-IEO',
      text: '1,000,000,000',
    },
    {
      teaser: 'Founders Round',
      text: '1,000,000,000',
    },
    {
      teaser: 'IEO (Launch Pad Sale)',
      text: '4,000,000,000',
    },
    {
      teaser: 'Seed Round',
      text: '1,000,000,000',
    },
  ];
  return (
    <div>
      <h2 className={` ${styles.schedule_title} font-40 ttl container`} data-aos='fade-up'>Token Release Schedule</h2>
      <div className='container_bordered'>
        <div className='container_bordered-child' data-aos='fade-up'>
          <div className={`${styles.schedule_grid}`}>
            {data?.map((item, i) => {
              return (
                <div key={i} className={styles.schedule_text_wrap}>
                  <p className={`${styles.schedule_teaser} ${styles.orange} ttl `}>{item.teaser}</p>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;

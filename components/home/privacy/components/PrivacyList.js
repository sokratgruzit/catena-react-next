import styles from '../styles/PrivacyList.module.css';

function PrivacyList({ privacyList }) {
  return (
    <div className={styles.listWrapper}>
      {privacyList?.map((item, i) => (
        <div key={i}>
          <h2 className={styles.title}>
            <p>{`${i + 1}`}</p> {item?.title}
          </h2>
          <p className={styles.text}>{item?.text}</p>
          {item?.link && <a href='mailto:info@coremultichain.com'>{item?.link}</a>}
          {item?.bullets && (
            <ul>
              {item?.bullets.map((bullets, j) => (
                <li key={j}>{bullets}</li>
              ))}
            </ul>
          )}
          {item?.children &&
            item?.children?.map((child, j) => (
              <div key={j} className={styles.children}>
                <h3 className={styles.secondaryTitle}>
                  <p className={styles.numbering}>
                    {`${j + 1} `}
                    <span className={styles.circle}></span>
                    {`${j + 1} `}
                  </p>
                  {child?.title}
                </h3>
                <div className={styles.innerContent}>
                  <p className={styles.teaser}>{child?.text}</p>
                  {child?.bullets && (
                    <ul>
                      {child?.bullets.map((bullet, k) => (
                        <li key={k}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default PrivacyList;

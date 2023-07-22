import styles from '../styles/PrivacyList.module.css';

function PrivacyList({ privacyList }) {
  const privacyHeader = [
    {
      text: 'We are committed to protecting Your privacy. This Privacy Policy describes how We collect, use, store, share and protect the information collected through https://www.coremultichain.com/ (the “Website”).In this Privacy Policy, "We", "Us", and "Our" refer to CORE. For more information about Us, see “Our Details” at the end of this Policy.',
    },
    {
      text: 'This Privacy Policy is incorporated into and subject to Our Terms and Conditions. Capitalized words used but not defined in this Privacy Policy have the meaning given to them in the Terms and Conditions.',
    },
    {
      text: 'Please be advised that the practices described in this Privacy Policy apply only to information gathered online through the Website. This Privacy Policy applies where We are acting as a data controller with respect to the Personal Data of visitors, users, clients and customers (“You,” or “Your”); in other words, where We determine the purposes and means of the processing of that Personal Data.',
    },
    {
      span: 'PLEASE READ THIS PRIVACY POLICY CAREFULLY',
      text: ' because it affects Your rights under the law. You confirm that You have read and agreed to be bound by this Privacy Policy. If You do not agree with this Privacy Policy, You cannot use, access, create or publish in the Website. This Privacy Policy may change as Wecontinuously improve the Website, so please check it periodically.',
    },
    {
      text: 'We reserve the right to modify or amend the Privacy Policy from time to time without notice. Your continued use of the Website following the posting of changes to these terms will mean You accept those changes. If We intend to apply the modifications or amendments to this Privacy Policy retroactively or to Personal Data already in Our possession, We will provide You with notice of the modifications or amendments.',
    },
  ];
  return (
    <div className={styles.listWrapper}>
      <div className={styles.intro}>
        {privacyHeader?.map((item, index) => {
          return (
            <div key={index} className={styles.content}>
              <p>
                <span>{item.span}</span>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      {privacyList?.map((item, i) => (
        <div key={i} className='text'>
          <h2 className={`${styles.title} font-40 ttl`}>
            <p className='font-40 ttl'>{`${i + 1}`}</p> {item?.title}
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
                <h3 className={`${styles.secondaryTitle}  font_20 ttl`}>
                  <p className={`${styles.numbering} ttl font_20`}>
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

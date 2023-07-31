import styles from './BugBounty.module.css';

let data = [
  {
    text: [
      'Content spoofing',
      'Cache-control related issues',
      'Exposure of internal IP address or domains',
      'Bugs already known or already reported by someone else (reward goes to first reporter)',
      'Issues that are not reproducible',
      'Email/SMS bomb',
    ],
  },
  {
    title: 'Ineligible Submission Examples',
    text: [
      'Theoretical vulnerabilities without POC',
      'Any Dos/DDoS activities',
      'Invalid or missing SPF records (incomplete or missing SPF/DKIM/DMARC)',
      'Clickjacking/UI with minimal security impact',
      'Phishing',
      'Tab-nabbing',
    ],
  },
  {
    title: 'Actions to avoid',
    text: [
      'Testing on other users accounts',
      'Automated testing using tools such as scanners',
      'Excessive request attempts that affects the availability of our services to all users',
      'Destruction of data',
      'Disrupt of services',
    ],
  },
];

function BugBountyList({ data }) {
  return (
    <>
      {data?.map((item, i) => {
        return (
          <div className={styles.listWrap} key={i}>
            <div>
              <h3 className={`font-20 ttl ${styles.listTitle}`}>{item.title}</h3>
            </div>
            <div className={`text`}>
              <ul>
                {item.text?.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
            <svg width="1130" height="1" viewBox="0 0 1130 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line opacity="0.1" y1="0.5" x2="1130" y2="0.5" stroke="black" />
            </svg>
          </div>
        );
      })}
    </>
  );
}

export default BugBountyList;

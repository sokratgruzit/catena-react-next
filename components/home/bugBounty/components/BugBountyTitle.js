import styles from './BugBounty.module.css';

function BugBountyTitle(props) {
  return (
    <div className={styles.tltle_container}>
      <div>
        <h1 className={`ttl font-90 tYAnimation ${props.animate ? 'animate' : ''}`}>Bug Bounty</h1>
      </div>
      <p className={` font-20 ${styles.text} delay1 tYAnimation ${props.animate ? 'animate' : ''}`}>
        CATENA is calling all bug bounty hunters to identify bugs in the CATENA Framework. We invite our community
        and all professional bug hunters to investigate and responsibly report findings to us. The rewards will
        range from an equivalent of 10 – 1000 USDT, with an increase according to the submission quality and
        seriousness of the identified threat. In the case of many hackers finding the same bug, the first to submit
        earns the reward.
      </p>
    </div>
  );
}

export default BugBountyTitle;

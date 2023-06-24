import styles from "./bugBounty.module.css";

function BugBountyTitle() {
  return (
    <div>
      <div id="main" className="outer">
        <div className="main-container__description">
          <div className="left">
            <h1 className={styles.h1}>Bug Bounty</h1>
          </div>
          <p className={styles.text}>
            CATENA is calling all bug bounty hunters to identify bugs in the CATENA Framework. We invite our community
            and all professional bug hunters to investigate and responsibly report findings to us. The rewards will
            range from an equivalent of 10 – 1000 USDT, with an increase according to the submission quality and
            seriousness of the identified threat. In the case of many hackers finding the same bug, the first to submit
            earns the reward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BugBountyTitle;

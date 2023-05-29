function BugBountyRewards() {
  return (
    <section className="container">
      <div className="rewards__container">
        <div className="rewards_head">
          <h2 className="font-51">Rewards</h2>
        </div>

        <div className="rewards__steps">
          <div className="rewards__step">
            <div className="rewards__steps-ttl">First</div>
            <div className="rewards__steps-desc">Submit suggestions</div>
          </div>
          <div className="rewards__step">
            <div className="rewards__steps-ttl">Then</div>
            <div className="rewards__steps-desc">Get rewarded</div>
          </div>
        </div>

        <div className="rewards__line">
          <div className="line-circle"></div>
          <div className="line-circle"></div>
        </div>

        <div className="rewards__desc">
          <span>The minimum reward for eligible issues is the equivalent of 10 USDT.</span>
          <span>In case of many hackers finding the same bug, the first who submitted gets the rewards.</span>
        </div>

        <div className="rewards__range">
          <div className="range-ttl">Rewards Range</div>
          <div className="rewards__table">
            <div className="tr tr-head">
              <div className="td">BUGS</div>
              <div className="td">LOW RISK</div>
              <div className="td">MEDIUM RISK</div>
              <div className="td">HIGH RISK</div>
            </div>
            <div className="tr tr-body">
              <div className="td">10-50 USDT</div>
              <div className="td">50-200 USDT</div>
              <div className="td">200-500 USDT</div>
              <div className="td">500-1000 USDT</div>
            </div>
          </div>
        </div>
      </div>
      <li></li>
    </section>
  );
}

export default BugBountyRewards;

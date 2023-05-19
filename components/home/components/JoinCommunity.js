const JoinCommunity = () => {
  return (
    <div>
      <div className='footer__join-left'>
        <div className='footer__join-title'>
          Join the <span>CORE</span> community
        </div>
        <div className='footer__join-description'>Be one of innovators who subscribe to our updates.</div>
      </div>
      <div>
        <form>
          <div className='input-container'>
            <input type='text' placeholder='myname@example.com' v-model='email' name='message' />
            <svg width='20' height='17' viewBox='0 0 20 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11.8702 0.513321L9.88674 2.51748L14.3496 6.98034L0.113892 6.98034L0.113892 9.7903L14.3496 9.7903L9.88674 14.2532L11.8702 16.2573L19.7422 8.38532L11.8702 0.513321Z'
                fill='white'
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCommunity;

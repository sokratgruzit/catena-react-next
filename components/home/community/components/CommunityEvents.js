const CommunityEvents = props => {
  const { title, info, infoCont, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div className='community__vertical-ttl font-51'>{description}</div>
        <div className='community__vertical-ttl-text font-15'>
          {info}
          <br></br>
          <br></br>
          {infoCont}
        </div>
      </div>
    </div>
  );
};

export default CommunityEvents;

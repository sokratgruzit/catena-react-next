const CoreTeam = props => {
  const { team, title } = props;

  return (
    <div className='container career-qualities'>
      <h2 className='font-51'>{title}</h2>
      {team.map((item, index) => {
        return (
          <div className='container career-qualities' key={index}>
            <div className='career-qualities__subttl'>{item.title}</div>
            <div className='career-qualities__text'>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CoreTeam;
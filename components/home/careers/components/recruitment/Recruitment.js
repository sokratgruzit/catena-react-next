const Recruitment = props => {
  const { data, title } = props;
  return (
    <div className='container career-qualities'>
      <h2 className='font-51'>{title}</h2>
      {data.map(item => {
        return (
          <div key={item.title}>
            <div className='career-qualities__subttl'>{item.title}</div>
            <div className='career-qualities__text'>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Recruitment;

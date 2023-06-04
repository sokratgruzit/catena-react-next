const HowWeHire = props => {
  const { hiringProcess, title, description } = props;

  return (
    <div>
      <section className='container'>
        <div className='hire__steps-section'>
          <div className='hire__steps-head'>
            <h2 className='font-51'>{title}</h2>
            <p>{description}</p>
          </div>

          <div className='hire__steps'>
            {hiringProcess.map((item, index) => {
              return (
                <div key={index} className='hire__step'>
                  <div className='hire__steps-ttl font-51'>{item.number}</div>
                  <div className='hire__steps-desc'>{item.title}</div>
                  <div className='hire__steps-line'>{item.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <div>
        <h2 className='font-51'>{title}</h2>
        <p>{description}</p>
      </div>
      {hiringProcess.map((item, index) => {
        return (
          <div key={index}>
            <div className='hire__steps-ttl font-51'>{item.number}</div>
            <div className='hire__steps-desc'>{item.title}</div>
            <div>{item.value}</div>
          </div>
        );
      })} */}
    </div>
  );
};

export default HowWeHire;

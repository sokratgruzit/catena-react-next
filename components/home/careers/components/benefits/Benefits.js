const Benefits = props => {
  const { benefitsArr, title } = props;

  return (
    <section className='container'>
      <div className='career__benefits-section'>
        <div className='benefits_ttl font-51'>{title}</div>
        <div className='career__benefits-container'>
          <div className='career__benefit-col'>
            <div className='col_img'></div>
            <ul>
              {benefitsArr.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
    // <div className='container career-qualities'>
    //   <h2 className='font-51'>{title}</h2>
    //   {benefitsArr.map((item, index) => {
    //     return (
    //       <ul key={index}>
    //         <li>{item.title}</li>
    //       </ul>
    //     );
    //   })}
    // </div>
  );
};

export default Benefits;

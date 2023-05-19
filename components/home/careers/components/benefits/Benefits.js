const Benefits = props => {
  const { benefitsArr, title } = props;

  return (
    <div className='container career-qualities'>
      <h2 className='font-51'>{title}</h2>
      {benefitsArr.map(item => {
        return (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Benefits;

const OurValues = props => {
  const { iconImages, title, description } = props;
  return (
    <div>
      <div className='container'>
        <h2 className='font-51'>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        {iconImages.map(item => {
          return (
            <div key={item.title} className='career_item'>
              <div className='item_ttl' key={item.title}>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;

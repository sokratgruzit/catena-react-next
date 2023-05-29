const CoreMultichainWork = props => {
  const { title, coreMultichain } = props;

  return (
    <div>
      <h3>{title}</h3>
      {coreMultichain.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CoreMultichainWork;

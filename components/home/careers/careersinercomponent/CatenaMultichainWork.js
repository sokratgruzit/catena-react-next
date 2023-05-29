const CatenaMultichainWork = props => {
  const { title, catenaMultichain } = props;

  return (
    <div>
      <h3>{title}</h3>
      {catenaMultichain.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default CatenaMultichainWork;

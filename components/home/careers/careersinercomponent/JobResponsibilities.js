const JobResponsibilities = props => {
  const { requirements, title, description } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {requirements.map(item => {
        return (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default JobResponsibilities;

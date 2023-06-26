const JobResponsibilities = props => {
  const { requirements, title, description } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {requirements.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default JobResponsibilities;



const Recruitment = (props) => {

    const { data, title } = props;
  return (
    <div>
        <h2>{title}</h2>
    {data.map((item) => {
        return (
            <div key={item.title}>
                <div>{item.title}</div>
                <div>{item.value}</div>
            </div>
        )
    })}
    </div>
  )
}

export default Recruitment

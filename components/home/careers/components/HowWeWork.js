

const HowWeWork = (props) => { 
    const { howWork, title } = props

  return (
    <div>
        <h2>{title}</h2>
      {howWork.map((item) => {
        return (
            <p key={item.title}>{item.title}</p>
        )
      })}
    </div>
  )
}

export default HowWeWork

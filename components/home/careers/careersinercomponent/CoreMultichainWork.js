

const CoreMultichainWork = (props) => {
    const { title, coreMultichain } = props
    
  return (
    <div>
      <h3>{title}</h3>
      {coreMultichain.map((item) => {
        return (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  )
}

export default CoreMultichainWork
